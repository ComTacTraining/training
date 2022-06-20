import { speeches } from '../src/firecommand'
import { Authenticator } from '@aws-amplify/ui-react'
import { Predictions } from 'aws-amplify'
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions'
import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import mic from 'microphone-stream'
import * as marshaller from '@aws-sdk/eventstream-marshaller'
import * as util_utf8_node from '@aws-sdk/util-utf8-node'

const eventStreamMarshaller = new marshaller.EventStreamMarshaller(
  util_utf8_node.toUtf8,
  util_utf8_node.fromUtf8
)

const Home: NextPage = () => {
  const ws = React.useRef<WebSocket | null>(null)

  const [url, setUrl] = React.useState('')
  const [isPaused, setIsPaused] = React.useState(false)
  const [stage, setStage] = React.useState('')
  const [audioCtx, setAudioCtx] = React.useState<AudioContext | null>(null)

  React.useEffect(() => {
    const getUrl = async () => {
      try {
        const response = await fetch('/api/stt', {
          method: 'POST',
          mode: 'same-origin'
        })
        const resUrl = await response.json()
        setUrl(resUrl.url)
      } catch (error) {
        console.log(`Unable to fetch websocket url`)
      }
    }

    if (url === '') {
      getUrl()
    }
  }, [url])

  React.useEffect(() => {
    if (url === '') {
      return
    }
    ws.current = new WebSocket(url)
    ws.current.onopen = () => {
      console.log('[Web Socket Opened]')
    }
    ws.current.onclose = () => {
      console.log('[Web Socket Closed]')
    }

    const currWebSocket = ws.current

    return () => {
      currWebSocket.close()
    }
  }, [url])

  React.useEffect(() => {
    if (!ws.current) return

    console.log('websocket is ready')

    ws.current.onmessage = (e) => {
      const message = JSON.parse(e.data)
      console.log('e', message)
    }

    ws.current.onmessage = (message) => {
      if (isPaused) return
      //convert the binary event stream message to JSON
      const messageWrapper = eventStreamMarshaller.unmarshall(
        Buffer.from(message.data)
      )

      if (messageWrapper.headers[':message-type'].value === 'event') {
        const messageBody = JSON.parse(
          String.fromCharCode.apply(String, Array.from(messageWrapper.body))
        )
        // handleEventStreamMessage(messageBody)
      } else {
        console.log('[Websocket message type is not an event]')
        // transcribeException = true
        // showError(messageBody.Message)
        // toggleStartStop()
      }
    }

    ws.current.onerror = function () {
      console.error('WebSocket connection error. Try again.')
    }

    // ws.current.onclose = function (closeEvent) {
    //   micStream.stop()

    //   // the close event immediately follows the error event; only handle one.
    //   if (!socketError && !transcribeException) {
    //     if (closeEvent.code != 1000) {
    //       showError(
    //         '</i><strong>Streaming Exception</strong><br>' + closeEvent.reason
    //       )
    //     }
    //     toggleStartStop()
    //   }
    // }
  }, [isPaused])

  React.useEffect(() => {
    try {
      Predictions.addPluggable(new AmazonAIPredictionsProvider())
      const AudioContext = window.AudioContext // || window.webkitAudioContext
      setAudioCtx(new AudioContext())
      return () => {
        Predictions.removePluggable(AmazonAIPredictionsProvider.name)
      }
    } catch (e) {
      console.log(e)
    }
  }, [])

  // const handleEventStreamMessage = (messageJson) => {
  //   let results = messageJson.Transcript.Results
  //   if (results.length > 0) {
  //     if (results[0].Alternatives.length > 0) {
  //       let transcript = results[0].Alternatives[0].Transcript

  //       transcript = decodeURIComponent(escape(transcript))
  //       setCurrentTranscript(transcript)
  //       if (!results[0].IsPartial) {
  //         setLastTranscript(
  //           (prevLastTranscript) => prevLastTranscript + ' ' + transcript
  //         )
  //         setCurrentTranscript('')
  //       }
  //     }
  //   }
  // }

  const tts = React.useCallback(
    async (text: string, voiceId: string) => {
      try {
        if (audioCtx) {
          const result = await Predictions.convert({
            textToSpeech: {
              source: {
                text
              },
              voiceId
            }
          })
          const source = audioCtx.createBufferSource()
          audioCtx.decodeAudioData(
            result.audioStream,
            (buffer) => {
              source.buffer = buffer
              source.connect(audioCtx.destination)
              source.start(0)
            },
            (err) => console.log({ err })
          )
        }
      } catch (error) {
        console.log(error)
      }
    },
    [audioCtx]
  )

  React.useEffect(() => {
    let voice = ''
    let text = ''
    const fetchSpeech = async () => {
      await tts(text, voice)
    }

    switch (stage) {
      case 'first-alarm':
        voice = speeches.firstAlarm.voice
        text = speeches.firstAlarm.text
        break
      case 'engine-2-arrival':
        voice = speeches.engine2Arrival.voice
        text = speeches.engine2Arrival.text
        break
      case 'truck-1-arrival':
        voice = speeches.truck1Arrival.voice
        text = speeches.truck1Arrival.text
        break
      case 'engine-3-arrival':
        voice = speeches.engine3Arrival.voice
        text = speeches.engine3Arrival.text
        break
      case 'incident':
        voice = speeches.incident.voice
        text = speeches.incident.text
        break
      case 'chief-arrival':
        voice = speeches.chiefArrival.voice
        text = speeches.chiefArrival.text
        break
    }
    if (text !== '' && voice !== '') {
      fetchSpeech()
    }
  }, [stage, tts])

  const advance = async () => {
    switch (stage) {
      case 'first-alarm':
        setStage('engine-2-arrival')
        break
      case 'engine-2-arrival':
        setStage('truck-1-arrival')
        break
      case 'truck-1-arrival':
        setStage('engine-3-arrival')
        break
      case 'engine-3-arrival':
        setStage('incident')
        break
      case 'incident':
        setStage('chief-arrival')
        break
    }
  }

  return (
    <Box>
      <Authenticator>
        {({ signOut, user }) => {
          return (
            <>
              <Typography variant='body1' component='p' gutterBottom>
                Welcome {user?.username} 🚒
              </Typography>
              <Button onClick={advance}>Advance</Button>
              <Box mt={10}>
                <Button onClick={signOut}>Sign out</Button>
              </Box>
            </>
          )
        }}
      </Authenticator>
    </Box>
  )
}

export default Home

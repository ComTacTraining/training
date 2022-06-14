import { speeches } from '../src/firecommand'
import { Authenticator } from '@aws-amplify/ui-react'
import { Predictions } from 'aws-amplify'
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions'
import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import * as React from 'react'

const Home: NextPage = () => {
  const [stage, setStage] = React.useState('first-alarm')
  const [firstAlarm, setFirstAlarm] = React.useState(false)
  const [engine2Arrival, setEngine2Arrival] = React.useState(false)
  const [truck1Arrival, setTruck1Arrival] = React.useState(false)
  const [engine3Arrival, setEngine3Arrival] = React.useState(false)
  const [incident, setIncident] = React.useState(false)
  const [chiefArrival, setChiefArrival] = React.useState(false)

  const [audioCtx, setAudioCtx] = React.useState<AudioContext | null>(null)

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

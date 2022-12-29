import { useEffect, useState } from 'react'
import { Predictions } from 'aws-amplify'
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions'

const CHIEF = 'Russell'
const ENGINE1 = 'Joey'
const TRUCK1 = 'Salli'
const ENGINE2 = 'Matthew'
const DISPATCH = 'Joanna'
// Kendra, Kimberly, Nicole

const useAudio = () => {
  const [audioContext, setAudioContext] = useState<AudioContext>()
  const [text, setText] = useState('')
  const [voice, setVoice] = useState(DISPATCH)

  useEffect(() => {
    Predictions.addPluggable(new AmazonAIPredictionsProvider())
    setAudioContext(new window.AudioContext())
    return () => Predictions.removePluggable('AmazonAIPredictionsProvider')
  }, [])

  useEffect(() => {
    const textToSpeech = async () => {
      if (audioContext) {
        const result = await Predictions.convert({
          textToSpeech: { source: { text }, voiceId: voice }
        })
        // console.log(result)
        const source = audioContext.createBufferSource()
        audioContext.decodeAudioData(
          result.audioStream,
          (buffer) => {
            source.buffer = buffer
            source.connect(audioContext.destination)
            source.start(0)
          },
          (err) => console.log({ err })
        )
      }
    }
    if (audioContext && text !== '') {
      textToSpeech()
    }
  }, [audioContext, text, voice])

  return { audioContext, setVoice, setText }
}

export default useAudio

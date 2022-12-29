import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

interface IAppAudioContextProps {
  audioContext: AudioContext | undefined
  setAudioContext: (audioContext?: AudioContext) => void
}

const AppAudioContext = createContext<IAppAudioContextProps>({
  audioContext: undefined,
  setAudioContext: () => null
})

const useAudio = () => useContext(AppAudioContext)

interface IAudioContextProviderProps {
  children?: ReactNode
}

const AudioContextProvider = ({ children }: IAudioContextProviderProps) => {
  const [context, setContext] = useState<AudioContext>()

  useEffect(() => {
    const ctx = new AudioContext()
    setContext(ctx)
    return () => {
      if (ctx) {
        ctx.close()
      }
    }
  }, [])

  return (
    <AppAudioContext.Provider value={{ audioContext: context, setContext }}>
      {children}
    </AppAudioContext.Provider>
  )
}

export { AppAudioContext, useAudio }
export default AudioContextProvider

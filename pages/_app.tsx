import { AmplifyProvider, Theme } from '@aws-amplify/ui-react'
import { Amplify, Auth } from 'aws-amplify'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import createCache from '@emotion/cache'

import awsconfig from '../src/aws-exports'
import '@fontsource/anton'
import '@fontsource/roboto'
import '@fontsource/inter'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure({
  ...awsconfig,
  ssr: true
})
Auth.configure(awsconfig)

const clientSideEmotionCache = createCache({ key: 'css', prepend: true })

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const amplifyTheme: Theme = {
  name: 'training',
  tokens: {
    colors: {
      font: {
        primary: {
          value: '#650f22'
        },
        secondary: {
          value: '#c6a48e'
        }
      }
    }
  }
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <AmplifyProvider theme={amplifyTheme}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Command Tactical Training</title>
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
          <meta
            name='description'
            content="Command Tactical Training's focus is on Firefighter Survival and building strong Incident Commanders."
          />
        </Head>
        <Component {...pageProps} />
      </CacheProvider>
    </AmplifyProvider>
  )
}

export default MyApp

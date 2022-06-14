import { AmplifyProvider, Theme } from '@aws-amplify/ui-react'
import { Amplify, Auth } from 'aws-amplify'

import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import createCache from '@emotion/cache'
import { red } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material/styles'

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

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c0115'
    },
    secondary: {
      main: '#debb8c'
    },
    error: {
      main: red.A400
    }
  }
})

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
              <Toolbar>
                <NextLink href='/'>
                  <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}>
                    <Image src='/logo.svg' alt='' width='40' height='40' />
                  </IconButton>
                </NextLink>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                  Command Tactical Training
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh'
            }}>
            <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='lg'>
              <Component {...pageProps} />
            </Container>
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </AmplifyProvider>
  )
}

export default MyApp

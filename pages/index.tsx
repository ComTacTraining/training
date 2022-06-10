import { Authenticator } from '@aws-amplify/ui-react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Home: NextPage = () => {
  return (
    <Box>
      <Authenticator>
        {({ signOut, user }) => {
          return (
            <>
              <Typography variant='body1' component='p' gutterBottom>
                Welcome
              </Typography>
              <Button onClick={signOut}>Sign out</Button>
            </>
          )
        }}
      </Authenticator>
    </Box>
  )
}

export default Home

import crypto from 'crypto'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Amplify, withSSRContext } from 'aws-amplify'
import { createPresignedURL } from '../../src/aws-signature-v4'
import config from '../../src/aws-exports.js'

Amplify.configure({ ...config, ssr: true })

const accessId = process.env.TRANSCRIBE_ACCESS_ID
const secretKey = process.env.TRANSCRIBE_SECRET_KEY

type Success = {
  url: string
}

type Fail = {
  statusCode: number
  message: string
}

interface ErrorMessage {
  message: string
}

const stt = async (
  req: NextApiRequest,
  res: NextApiResponse<Success | Fail>
) => {
  const getErrorMessage = (error: ErrorMessage) => {
    return String(error.message)
  }

  if (req.method === 'POST') {
    const { Auth } = withSSRContext({ req })

    try {
      // await Auth.currentAuthenticatedUser()
      let endpoint = 'transcribestreaming.us-east-1.amazonaws.com:8443'

      // get a preauthenticated URL that we can use to establish our WebSocket
      let resUrl = createPresignedURL(
        'GET',
        endpoint,
        '/stream-transcription-websocket',
        'transcribe',
        crypto.createHash('sha256').update('', 'utf8').digest('hex'),
        {
          key: accessId,
          secret: secretKey,
          sessionToken: '',
          protocol: 'wss',
          expires: 15,
          region: 'us-east-1',
          query: 'language-code=en-US&media-encoding=pcm&sample-rate=44100'
        }
      )

      res.status(200).json({
        url: resUrl
      })
    } catch (e) {
      const msg = getErrorMessage(e as ErrorMessage)
      res.status(500).json({ statusCode: 500, message: String(msg) })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default stt

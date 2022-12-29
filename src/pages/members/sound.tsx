import { NextPage } from 'next'
import Layout from '../../components/Layout'
import useAudio from '../../hooks/useAudio'

const Page: NextPage = () => {
  const { setText } = useAudio()
  return (
    <Layout withAuth={true} heading='Sound'>
      <div>
        <button
          onClick={() =>
            setText('Engine 1 on scene of a residential structure fire.')
          }>
          TTS
        </button>
      </div>
    </Layout>
  )
}

export default Page

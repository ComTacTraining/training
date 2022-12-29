import type { NextPage } from 'next'
import Layout from '../components/Layout'

const Sim: NextPage = () => {
  return (
    <Layout noSpacing={true}>
      <div
        className='embed-responsive embed-responsive-16by9 relative w-full overflow-hidden'
        style={{ paddingTop: '56.25%' }}>
        <iframe
          className='embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full'
          src='https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com'
          data-gtm-yt-inspected-2340190_699='true'
          id='240632615'></iframe>
      </div>
    </Layout>
  )
}

export default Sim

import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Join from '../components/Join'

// import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  // const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }])

  return (
    <Layout noSpacing={true}>
      <Hero />
      <Join />
      <main className='container mx-auto mb-16 flex flex-col items-center justify-center p-4'>
        <p className='text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800'>
          This training program for Firefighter Safety and Survival will address
          those three common dominators and help to equip you to prevent
          firefighter fatalities in your organization. Register and practice
          this perishable skill. It may help save the life of a firefighter.
        </p>
        <p className='text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800'>
          These realistic simulations were built by Fire Officers who have
          actually crawled down hallways and commanded incidents. There are over
          500 opportunities to practice and improve your skills. Within those
          500 prebuilt scenarios if you do not find buildings comparable to your
          jurisdiction just provide us with the photographs and we will build
          them for you.
        </p>
        <p className='text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800'>
          The program has been developed for the Fire Service and can be used
          from any internet connected device. This is an automated system and
          the program does not need your training division to administer. The
          program can be used as an individual, together as a company or as a
          battalion. This can be accessed 24/7/365 from any device in a very
          user friendly platform.
        </p>
      </main>
    </Layout>
  )
}

export default Home

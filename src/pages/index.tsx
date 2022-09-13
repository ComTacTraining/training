import type { NextPage } from 'next'
import Head from 'next/head'
// import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  // const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }])

  return (
    <>
      <Head>
        <title>Command Tactical Training</title>
        <meta
          name='description'
          content="Command Tactical Training's focus is on Firefighter Survival and building strong Incident Commanders."
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto flex flex-col items-center justify-center min-h-screen p-4'>
        <h1 className='text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700'>
          Command Tactical Training
        </h1>

        {/* <div className='pt-6 text-2xl text-blue-500 flex justify-center items-center w-full'>
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div> */}
      </main>
    </>
  )
}

export default Home

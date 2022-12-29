import type { NextPage } from 'next'
import Layout from '../components/Layout'

const Features: NextPage = () => {
  return (
    <Layout heading='Features'>
      <p className='text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800'>
        This training program for Firefighter Safety and Survival will address
        those three common dominators and help to equip you to prevent
        firefighter fatalities in your organization. Register and practice this
        perishable skill. It may help save the life of a firefighter.
      </p>
      <p className='text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800'>
        These realistic simulations were built by Fire Officers who have
        actually crawled down hallways and commanded incidents. There are over
        500 opportunities to practice and improve your skills. Within those 500
        prebuilt scenarios if you do not find buildings comparable to your
        jurisdiction just provide us with the photographs and we will build them
        for you.
      </p>
    </Layout>
  )
}

export default Features

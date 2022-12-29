import type { NextPage } from 'next'
import Form from '../../components/Form'
import Settings from '../../components/Settings'
import Card from '../../components/Card'
import Stats from '../../components/Stats'
import { useState } from 'react'
import Layout from '../../components/Layout'

const Member: NextPage = () => {
  const [editing, setEditing] = useState(false)
  return (
    <Layout heading='Member Dashboard' withAuth={true}>
      <div className='grid grid-cols-2'>
        <Card />
        <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm'>
          {editing ? <Form /> : <Settings />}
          <button
            className='inline-block m-2 px-6 py-2.5 bg-red-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out'
            onClick={() => setEditing(!editing)}>
            {editing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
      <Stats />
    </Layout>
  )
}

export default Member

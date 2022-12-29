import { NextPage } from 'next'
import { useAuthenticator } from '@aws-amplify/ui-react'
import Layout from '../../components/Layout'

const UserAccessPage: NextPage = () => {
  const { user } = useAuthenticator((context) => [context.user])
  return (
    <Layout heading='User Access' withAuth={true}>
      <p>Welcome {user?.attributes?.email}!</p>
      <p>
        Quick example to show how to access the user within an authenticated
        page.
      </p>
    </Layout>
  )
}

export default UserAccessPage

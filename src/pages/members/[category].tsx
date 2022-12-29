import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import CategorySection from '../../components/Category'
import { Predictions } from 'aws-amplify'
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions'
import { useEffect } from 'react'
import Layout from '../../components/Layout'

const CategoryPage: NextPage = () => {
  const router = useRouter()
  const { category } = router.query

  useEffect(() => {
    const provider = Predictions.getPluggable('AmazonAIPredictionsProvider')
    if (!provider) {
      Predictions.addPluggable(new AmazonAIPredictionsProvider())
    }
    return () => {
      const predictionsProvider = Predictions.getPluggable(
        'AmazonAIPredictionsProvider'
      )
      if (predictionsProvider) {
        Predictions.removePluggable('AmazonAIPredictionsProvider')
      }
    }
  }, [])

  return (
    <Layout withAuth={true}>
      <CategorySection name={category as string} />
    </Layout>
  )
}

export default CategoryPage

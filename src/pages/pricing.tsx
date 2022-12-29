import type { NextPage } from 'next'
import Layout from '../components/Layout'

const CheckmarkIcon = () => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='check'
      className='text-green-600 w-4 h-4 mr-2'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path>
    </svg>
  )
}

const GroupButton = ({ focus }: { focus: boolean }) => {
  const additionalClasses = focus
    ? 'bg-red-900 text-white hover:bg-red-700 focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 shadow-md hover:shadow-lg active:shadow-lg'
    : 'bg-gray-100 text-red-900 hover:bg-gray-200 hover:text-red-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200                                   '
  return (
    <button
      type='button'
      className={`inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out w-full ${additionalClasses}`}>
      Buy
    </button>
  )
}

const FeatureList = ({ list }: { list: string[] }) => {
  return (
    <div className='p-6'>
      <ol className='list-inside'>
        {list.map((i) => (
          <li key={i} className='mb-4 flex items-center'>
            <CheckmarkIcon />
            {i}
          </li>
        ))}
      </ol>
    </div>
  )
}

const GroupDisplay = ({
  title,
  subtitle,
  price,
  term,
  location,
  list
}: {
  title: string
  subtitle?: string
  price?: number
  term?: string
  location: 'left' | 'center' | 'right'
  list: string[]
}) => {
  return (
    <div className={location === 'center' ? 'p-0' : 'p-0 py-12'}>
      <div
        className={`block rounded-lg shadow-lg bg-white h-full ${
          location === 'center'
            ? 'z-10'
            : location === 'left'
            ? 'lg:rounded-tr-none lg:rounded-br-none'
            : 'lg:rounded-tl-none lg:rounded-bl-none'
        }`}>
        <div className='p-6 border-b border-gray-300 text-center'>
          <p className='uppercase text-sm'>
            <strong>{title}</strong>
          </p>
          {subtitle ? (
            <p className='uppercase mb-4 text-sm'>
              <strong>{subtitle}</strong>
            </p>
          ) : null}
          {price ? (
            <h3 className='text-2xl mb-6'>
              <strong>${price.toLocaleString('en-US')}</strong>
              {term ? (
                <small className='text-gray-500 text-sm'>/{term}</small>
              ) : null}
            </h3>
          ) : null}
          <GroupButton focus={location === 'center' ? true : false} />
        </div>
        <FeatureList list={list} />
      </div>
    </div>
  )
}

const returningItems = [
  'Unlimited updates',
  'Git repository',
  'npm installation'
]
const introductoryItems = [
  'Unlimited updates',
  'Git repository',
  'npm installation',
  'Code examples',
  'Premium snippets',
  'Premium support',
  'Drag & Drop builder'
]
const departmentItems = [
  'Unlimited updates',
  'Git repository',
  'npm installation',
  'Code examples',
  'Premium snippets'
]

const Pricing: NextPage = () => {
  return (
    <Layout heading='Pricing'>
      <div
        className='grid lg:grid-cols-3 px-6 md:px-12 xl:px-32'
        style={{ marginTop: '-200px' }}>
        <GroupDisplay
          title='Returning Members'
          price={19.95}
          term={'month'}
          location='left'
          list={returningItems}
        />
        <GroupDisplay
          title='Introductory Members'
          subtitle='(First 1,000)'
          price={24.95}
          term='month'
          location='center'
          list={introductoryItems}
        />
        <GroupDisplay
          title='Department'
          subtitle='(10+ Annual Subscriptions)'
          price={2395}
          term='year'
          location='right'
          list={departmentItems}
        />
      </div>
    </Layout>
  )
}

export default Pricing

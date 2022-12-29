import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Card = () => {
  return (
    <div className='flex justify-center'>
      <div className='rounded-lg shadow-lg bg-white max-w-sm'>
        <a href='#!'>
          <Image
            className='rounded-t-lg'
            src='/184.jpg'
            alt='placeholder'
            width='780'
            height='520'
          />
        </a>
        <div className='p-6'>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>
            Capt. John Doe
          </h5>
          <Link href='/members/sound'>
            <Button>Sound Test</Button>
          </Link>
          <p className='text-gray-700 text-base mb-4'>
            {`Select the category of evolution`}
          </p>
          <div className='flex flex-auto'>
            <div>
              <Link href='/members/commercial'>
                <Button>Commercial</Button>
              </Link>
            </div>
            <div>
              <Link href='/members/industrial'>
                <Button>Industrial</Button>
              </Link>
            </div>
          </div>
          <div className='flex flex-auto'>
            <div>
              <Link href='/members/singlefamily'>
                <Button>Single Family</Button>
              </Link>
            </div>
            <div>
              <Link href='/members/multifamily'>
                <Button>Multi Family</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card

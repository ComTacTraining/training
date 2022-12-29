const Footer = () => {
  return (
    <>
      <div className='container mx-auto mb-16 flex flex-col items-center justify-center p-4'>
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
      </div>
      <footer className='text-center mt-auto bg-gray-900 text-white'>
        <div className='flex justify-center py-6'>
          <a
            href='https://www.facebook.com/SGAEducationalServices'
            type='button'
            className='rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='facebook-f'
              className='w-2 h-full mx-auto'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'>
              <path
                fill='currentColor'
                d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
            </svg>
          </a>

          <a
            href='https://twitter.com/Want2BeAFireman'
            type='button'
            className='rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='twitter'
              className='w-3 h-full mx-auto'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'>
              <path
                fill='currentColor'
                d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
            </svg>
          </a>

          <a
            href='https://www.youtube.com/user/Scottgoodwinassoc'
            type='button'
            className='rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='google'
              className='w-3 h-full mx-auto'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'>
              <path
                fill='currentColor'
                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
            </svg>
          </a>
        </div>

        <div
          className='text-center p-4'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 Copyright{' '}
          <a className='text-whitehite' href='https://comtactraining.com'>
            Command Tactical Training
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer

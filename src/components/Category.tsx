interface Props {
  name: string
}

const Category = (props: Props) => {
  return (
    <div
      className='w-full p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg'
      style={{
        backgroundImage: "url('/poster.png')",
        height: '540px'
      }}>
      <div
        className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='flex justify-center items-center h-full'>
          <div className='text-white'>
            <h2 className='font-semibold text-4xl mb-4 uppercase'>
              {props.name}
            </h2>
            <h4 className='font-semibold text-xl mb-6'>Evolution</h4>
            <a
              className='inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              href='#!'
              role='button'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'>
              Enable Mic
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category

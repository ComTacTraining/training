const Join = () => {
  return (
    <section className='mb-8 text-gray-800 background-radial-gradient'>
      <div className='px-6 py-12 md:px-12 text-center lg:text-left'>
        <div className='container mx-auto'>
          <div className='lg:grid-cols-2 gap-12 flex items-center'>
            <div className='mt-12 lg:mt-0'>
              <h1
                className='text-4xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12'
                style={{ color: 'hsl(218, 81%, 95%)' }}>
                Are you ready to improve <br />
                <span style={{ color: 'hsl(34, 48%, 73%)' }}>
                  your ground command?
                </span>
              </h1>
              <p
                className='text-lg leading-relaxed mt-6 mb-4'
                style={{ color: 'hsl(218, 81%, 95%)' }}>
                Our focus is on Firefighter Survival and building strong
                Incident Commanders. We believe that Size-Up is the most
                important skill we must develop and maintain throughout our
                careers.
              </p>
              <button
                type='button'
                className='inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'>
                Get started
              </button>
            </div>
            <div className='mb-12 lg:mb-0'>
              <div
                className='embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg'
                style={{ paddingTop: '56.25%' }}>
                <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full'></div>
                <iframe
                  className='embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full'
                  src='https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com'
                  allowFullScreen
                  data-gtm-yt-inspected-2340190_699='true'
                  id='240632615'></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join

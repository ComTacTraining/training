// import Button from './Button'

const Form = () => {
  return (
    <form>
      <div className='form-group mb-6'>
        <label
          htmlFor='dispatchCenter'
          className='form-label inline-block mb-2 text-gray-700'>
          Dispatch Center
        </label>
        <input
          type='text'
          className='form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='dispatchCenter'
          aria-describedby='dispatchCenterHelp'
          placeholder='Dispatch Center'
        />
        <small
          id='dispatchCenterHelp'
          className='block mt-1 text-xs text-gray-600'>
          {`The radio call signal for your department's dispatch center`}
        </small>
      </div>
      <div className='form-group mb-6'>
        <label
          htmlFor='dispatchCenter'
          className='form-label inline-block mb-2 text-gray-700'>
          Engine 1
        </label>
        <input
          type='text'
          className='form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='engine1'
          placeholder='Engine 1'
        />
      </div>
      <div className='form-group mb-6'>
        <label
          htmlFor='dispatchCenter'
          className='form-label inline-block mb-2 text-gray-700'>
          Engine 2
        </label>
        <input
          type='text'
          className='form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='dispatchCenter'
          aria-describedby='dispatchCenterHelp'
          placeholder='Engine 2'
        />
      </div>
      <div className='form-group mb-6'>
        <label
          htmlFor='dispatchCenter'
          className='form-label inline-block mb-2 text-gray-700'>
          Engine 3
        </label>
        <input
          type='text'
          className='form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='dispatchCenter'
          aria-describedby='dispatchCenterHelp'
          placeholder='Engine 3'
        />
      </div>
      <div className='form-group mb-6'>
        <label
          htmlFor='dispatchCenter'
          className='form-label inline-block mb-2 text-gray-700'>
          Truck 1
        </label>
        <input
          type='text'
          className='form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='dispatchCenter'
          aria-describedby='dispatchCenterHelp'
          placeholder='Truck 1'
        />
      </div>
      <div className='form-group mb-6'>
        <label
          htmlFor='dispatchCenter'
          className='form-label inline-block mb-2 text-gray-700'>
          Truck 2
        </label>
        <input
          type='text'
          className='form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='dispatchCenter'
          aria-describedby='dispatchCenterHelp'
          placeholder='Truck 2'
        />
      </div>
      <div className='form-group form-check mb-6'>
        <input
          type='checkbox'
          className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
          id='exampleCheck1'
        />
        <label
          className='form-check-label inline-block text-gray-800'
          htmlFor='exampleCheck1'>
          Show Tips
        </label>
      </div>
    </form>
  )
}

export default Form

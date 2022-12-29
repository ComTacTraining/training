import type { ComponentPropsWithoutRef, ReactElement, Ref } from 'react'
import { forwardRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'button'> {
  size?: string
  color?: string
}

const Button = forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
  const { children, ...others } = props
  return (
    <button
      type='button'
      ref={ref}
      className='inline-block m-2 px-6 py-2.5 bg-red-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out'
      {...others}>
      {children}
    </button>
  ) as ReactElement
})
Button.displayName = 'Button'

export default Button

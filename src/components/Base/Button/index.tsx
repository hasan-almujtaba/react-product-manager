import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

type Props = PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
  variant?: 'filled' | 'text' | 'outlined'
  onClick?: () => void
  size?: 'normal' | 'small'
}>

const Button = (props: Props) => {
  const {
    children,
    type = 'button',
    block,
    variant = 'filled',
    onClick,
    size = 'normal',
  } = props

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded bg-gradient-to-r from-purple-700 to-blue-700 px-5 font-medium  capitalize transition hover:opacity-80 active:opacity-90',
        variant === 'filled' && 'text-white shadow',
        variant === 'text' && ' bg-clip-text text-transparent',
        variant === 'outlined' &&
          'border border-purple-600 bg-clip-text text-transparent',
        block ? 'w-full' : '',
        size === 'normal' && 'h-9',
        size === 'small' && 'h-8'
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

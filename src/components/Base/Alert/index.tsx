import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

type Props = PropsWithChildren<{
  type: 'info' | 'success' | 'error' | 'warning'
}>

const Alert = (props: Props) => {
  const { children, type } = props

  return (
    <div
      className={clsx(
        'rounded p-2 text-sm font-medium',
        type === 'info' && 'bg-blue-100 text-blue-500',
        type === 'success' && 'bg-green-100 text-green-500',
        type === 'error' && 'bg-red-100 text-red-500',
        type === 'warning' && 'bg-yellow-100 text-yellow-500'
      )}
    >
      {children}
    </div>
  )
}

export default Alert

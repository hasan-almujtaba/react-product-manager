import React, { PropsWithChildren } from 'react'
import Dialog from '../Base/Dialog'

type Props = PropsWithChildren<{
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  title?: string
}>

const ConfirmationDialog = (props: Props) => {
  const { children, isOpen, setIsOpen, title } = props

  return (
    <>
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title ?? 'Are you sure?'}
      >
        {children}
      </Dialog>
    </>
  )
}

export default ConfirmationDialog

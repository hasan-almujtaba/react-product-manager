import React from 'react'
import Dialog from '../Base/Dialog'
import ProductForm from '../ProductForm'

type Props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const ProductDialog = (props: Props) => {
  const { isOpen, setIsOpen } = props

  return (
    <>
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add Product"
      >
        <ProductForm />
      </Dialog>
    </>
  )
}

export default ProductDialog

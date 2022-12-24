import React from 'react'
import useStore from '~/store'
import Table from '../Base/Table'

const headers = ['name', 'sku', 'brand', 'action']

const ProductTable = () => {
  const products = useStore((state) => state.products)

  return (
    <div>
      <Table
        headers={headers}
        items={products}
      />
    </div>
  )
}

export default ProductTable

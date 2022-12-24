import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '~/components/Base/Button'
import ProductForm from '~/components/ProductForm'
import useStore from '~/store'

const DashboardEdit = () => {
  const { id } = useParams()

  const products = useStore((state) => state.products)
  const product = products.filter((item) => item.id === Number(id))[0]

  console.log(id, product)

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-xl font-medium text-transparent">
          Edit {product.name}
        </h1>

        <Link to="/dashboard">
          <Button>Back to list</Button>
        </Link>
      </div>

      <ProductForm product={product} />
    </div>
  )
}

export default DashboardEdit

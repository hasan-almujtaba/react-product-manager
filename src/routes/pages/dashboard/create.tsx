import React from 'react'
import { Link } from 'react-router-dom'
import Button from '~/components/Base/Button'
import ProductForm from '~/components/ProductForm'

const DashboardCreate = () => {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-xl font-medium text-transparent">
          Add Product
        </h1>

        <Link to="/dashboard">
          <Button>Back to list</Button>
        </Link>
      </div>

      <ProductForm />
    </div>
  )
}

export default DashboardCreate

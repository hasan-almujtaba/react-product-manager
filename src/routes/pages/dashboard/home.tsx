import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '~/components/Base/Button'
import ProductDialog from '~/components/ProductDialog'
import ProductTable from '~/components/ProductTable'

const DashboardHome = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <h1 className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-xl font-medium text-transparent">
          Product List
        </h1>

        <Link to="/dashboard/create">
          <Button>Add Product</Button>
        </Link>
      </div>

      <ProductTable />

      <ProductDialog
        isOpen={show}
        setIsOpen={setShow}
      />
    </div>
  )
}

export default DashboardHome

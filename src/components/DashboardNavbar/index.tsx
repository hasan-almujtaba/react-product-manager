import React, { useState } from 'react'
import { useAuth } from '~/routes/auth'
import Button from '../Base/Button'
import ConfirmationDialog from '../ConfirmationDialog'

const DashboardNavbar = () => {
  const auth = useAuth()

  const [show, setShow] = useState(false)

  const onClick = () => {
    auth?.logout()
  }

  return (
    <div className="flex justify-between bg-white p-5 shadow">
      <div className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-xl font-medium text-transparent">
        React Product Management
      </div>

      <Button
        variant="text"
        onClick={() => setShow(true)}
      >
        Logout
      </Button>

      <ConfirmationDialog
        isOpen={show}
        setIsOpen={setShow}
      >
        <div>
          <p className="mb-5">
            You must login first to be able to access the dashboard again
          </p>

          <div className="grid grid-cols-2 gap-x-2">
            <Button onClick={onClick}>logout</Button>
            <Button
              variant="outlined"
              onClick={() => setShow(false)}
            >
              cancel
            </Button>
          </div>
        </div>
      </ConfirmationDialog>
    </div>
  )
}

export default DashboardNavbar

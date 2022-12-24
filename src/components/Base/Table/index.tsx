import React, { useState } from 'react'
import clsx from 'clsx'
import { MdEdit, MdDelete } from 'react-icons/md'
import Button from '../Button'
import { Link } from 'react-router-dom'
import ConfirmationDialog from '~/components/ConfirmationDialog'
import useStore from '~/store'
import { Product } from '~/types'

type Props = {
  headers: string[]
  items: Record<string, unknown>[]
}

const Table = (props: Props) => {
  const { headers, items } = props

  const isEven = (index: number) => {
    return index % 2 === 0
  }

  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState<Product | undefined>(undefined)

  const removeProduct = useStore((state) => state.removeProduct)

  const onClick = () => {
    if (selected !== undefined) removeProduct(selected)

    setShow(false)
  }

  const emptyState = (
    <tr>
      <td
        colSpan={headers.length}
        className="h-12 text-center"
      >
        Data not available
      </td>
    </tr>
  )

  const tableContent = items.map((item, index) => (
    <tr
      key={index}
      className={clsx(
        'text-center',
        isEven(index) ? 'bg-slate-200' : 'bg-white'
      )}
    >
      {headers.map((header, index) => (
        <td
          key={index}
          className={clsx('h-12', header === 'action' && 'w-64')}
        >
          {header === 'action' ? (
            <span className="flex justify-center gap-x-2">
              <Link to={`/dashboard/edit/${item.id}`}>
                <Button>
                  <MdEdit />
                </Button>
              </Link>
              <Button
                onClick={() => {
                  setSelected(item as Product)
                  setShow(true)
                }}
              >
                <MdDelete />
              </Button>
            </span>
          ) : (
            (item[header] as string)
          )}
        </td>
      ))}
    </tr>
  ))

  return (
    <>
      <table className="w-full overflow-hidden rounded-xl shadow">
        <thead>
          <tr className="bg-gradient-to-r from-purple-700 to-blue-700 text-white">
            {headers.map((header) => (
              <th
                key={header}
                className="h-12 capitalize"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{items.length === 0 ? emptyState : tableContent}</tbody>
      </table>

      <ConfirmationDialog
        isOpen={show}
        setIsOpen={setShow}
      >
        <div>
          <div className="mb-5">The product will be deleted</div>

          <div className="grid grid-cols-2 gap-x-2">
            <Button onClick={onClick}>Delete</Button>
            <Button
              variant="outlined"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </ConfirmationDialog>
    </>
  )
}

export default Table

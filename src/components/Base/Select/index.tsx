import React, { useId } from 'react'
import { UseFormRegister } from 'react-hook-form'

type Props = {
  name: string
  label?: string
  register: UseFormRegister<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  options: { text: string; value: string }[]
}

const Select = (props: Props) => {
  const { name, label, register, options } = props

  const formId = useId()

  return (
    <div>
      <label
        htmlFor={formId}
        className="mb-1 font-medium capitalize text-gray-600"
      >
        {label ? label : name}
      </label>
      <select
        {...register(name)}
        id={formId}
        className="h-9 w-full rounded border border-black py-1 px-2 outline-none focus:border-purple-700"
      >
        <option>Select Item</option>
        {options.map((item, index) => (
          <option
            key={index}
            value={item.value}
          >
            {item.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select

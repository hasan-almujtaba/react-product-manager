import React, { useId } from 'react'
import { UseFormRegister } from 'react-hook-form'

type Props = {
  placeholder?: string
  type?: string
  name: string
  label?: string
  register: UseFormRegister<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Input = (props: Props) => {
  const { placeholder, type = 'input', name, label, register } = props

  const formId = useId()

  return (
    <div>
      <label
        htmlFor={formId}
        className="mb-1 font-medium capitalize text-gray-600"
      >
        {label ? label : name}
      </label>
      <input
        className="h-9 w-full rounded border border-black p-2 outline-none focus:border-purple-700"
        placeholder={placeholder}
        type={type}
        {...register(name)}
        id={formId}
      />
    </div>
  )
}

export default Input

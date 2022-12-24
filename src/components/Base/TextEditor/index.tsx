import React, { useId } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type Props = {
  label?: string
  name: string
}

const TextEditor = (props: Props) => {
  const { label, name } = props

  const { control } = useFormContext()

  const formId = useId()

  return (
    <div>
      <label
        htmlFor={formId}
        className="mb-1 font-medium capitalize text-gray-600"
      >
        {label ? label : name}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactQuill
            {...field}
            theme="snow"
          />
        )}
      />
    </div>
  )
}

export default TextEditor

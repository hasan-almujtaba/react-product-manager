import clsx from 'clsx'
import React from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import useStore from '~/store'
import { Product } from '~/types'
import Button from '../Base/Button'
import Input from '../Base/Input'
import Select from '../Base/Select'
import TextEditor from '../Base/TextEditor'
import { brandOptions } from './data'

type FormData = Product

type Props = {
  product?: Product
}

const defaultVariant = { name: '', price: '', sku: '' }
const initialValue = {
  variant: [defaultVariant],
}

const ProductForm = (props: Props) => {
  const { product } = props

  const create = useStore((state) => state.addProduct)
  const update = useStore((state) => state.editProduct)

  const navigate = useNavigate()

  const form = useForm<FormData>({
    defaultValues: product ?? initialValue,
  })

  const { control, register } = form

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variant',
  })

  const onSubmit = form.handleSubmit((data) => {
    if (product !== undefined) {
      update(product.id, data)
      toast('Product Updated')

      navigate('/dashboard')

      return
    }

    data.id = new Date().getTime()
    create(data)
    toast('Product Added')

    navigate('/dashboard')
  })

  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <FormProvider {...form}>
        <form
          onSubmit={onSubmit}
          className="space-y-2"
        >
          <Input
            name="name"
            register={register}
          />
          <Input
            name="sku"
            register={register}
          />
          <Select
            name="brand"
            register={register}
            options={brandOptions}
          />

          <TextEditor name="description" />

          <div className="!mt-4 border-t pt-3">
            <div className="text-xl font-medium">Variant</div>

            {fields.map((field, index) => (
              <div
                key={field.id}
                className={clsx('space-y-2 border-b pb-3', index > 0 && 'pt-3')}
              >
                <Input
                  name={`variant.${index}.name`}
                  label="Name"
                  register={register}
                />

                <Input
                  name={`variant.${index}.sku`}
                  label="SKU"
                  register={register}
                />

                <Input
                  name={`variant.${index}.price`}
                  label="Price"
                  register={register}
                />

                {fields.length > 1 && (
                  <Button
                    onClick={() => remove(index)}
                    size="small"
                  >
                    Remove variant
                  </Button>
                )}
              </div>
            ))}

            <div className="mt-3 space-x-2">
              <Button
                onClick={() => append(defaultVariant)}
                size="small"
              >
                Add variant
              </Button>
            </div>
          </div>

          <div className="!mt-5 text-right">
            <Button type="submit">Save Product</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default ProductForm

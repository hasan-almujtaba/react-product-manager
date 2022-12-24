import { StateCreator } from 'zustand'
import { Product } from './product'

export type ProductSlice = {
  products: Product[]
  addProduct: (val: Product) => void
  editProduct: (id: number, val: Product) => void
  removeProduct: (val: Product) => void
}

export type Store = ProductSlice

export type StoreCreator<T> = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  T
>

import { ProductSlice, StoreCreator } from '~/types'

const createProductSlice: StoreCreator<ProductSlice> = (set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  editProduct: (id, product) =>
    set((state) => {
      const productIndex = state.products.findIndex((item) => item.id === id)
      state.products[productIndex] = product

      return { products: [...state.products] }
    }),
  removeProduct: (product) =>
    set((state) => ({
      products: state.products.filter((item) => item.id !== product.id),
    })),
})

export default createProductSlice

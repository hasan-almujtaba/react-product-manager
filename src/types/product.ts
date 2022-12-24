export type Product = {
  id: number
  name: string
  sku: string
  brand: string
  description: string
  variant: {
    name: string
    sku: string
    price: string
  }[]
}

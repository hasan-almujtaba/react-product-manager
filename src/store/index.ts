import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Store } from '~/types'
import createProductSlice from './product'

const useStore = create<Store>()(
  devtools(
    persist(
      (...a) => ({
        ...createProductSlice(...a),
      }),
      {
        name: 'rpm-zustand',
      }
    )
  )
)

export default useStore

import { configureStore } from '@reduxjs/toolkit'
import product from './filterSlice'

export const store = configureStore({
  reducer: {
    product: product,
  }
})
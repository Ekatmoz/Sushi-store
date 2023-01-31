import { configureStore } from '@reduxjs/toolkit'
import product from './filterSlice'
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    product,
    cart
  }
})
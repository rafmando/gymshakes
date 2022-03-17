import { configureStore } from '@reduxjs/toolkit'
import productReducer from './cartSlice'

export const store = configureStore({
  reducer: {
        productReducer : productReducer
  },
})
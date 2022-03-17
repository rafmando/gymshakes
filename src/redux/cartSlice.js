import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    storeItems: (state,action) => {
      state.items.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity
      })
  
      const total = state.items.reduce((total,item) => {
        return total + item.quantity
      },0)

      state.totalQuantity = total
      
      
    },
  }
});

export const { storeItems } = cartSlice.actions

export default cartSlice.reducer
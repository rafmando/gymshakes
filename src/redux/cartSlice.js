import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    storeItems: (state,action) => {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity
      }
      if(action.payload){
        state.items.push(newItem)
      }
      else {
        return state.items
      }
  
      const total = state.items.reduce((total,item) => {
        return total + item.quantity
      },0)
      state.totalQuantity = total      
    },
  }
});

export const { storeItems } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      //const timeId = new Date().getTime()
      //const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
      //if (itemInCart) {
        //itemInCart.quantity++;
      //} 
      //else {
        state.cartItems.push({ ...action.payload.product,
          //id: timeId,
          //productId: action.payload.product.id,
          quantity: action.payload.quantity,
          totalPrice: action.payload.quantity * action.payload.product.price,
        })
      //}
      
    },
    updateQuantity: (state, action) => {
      const newCart = []
      state.cartItems.forEach(item => {
        if (item.id === action.payload.product.id) {
          let countNew = item.quantity + action.payload.quantity
          let totalSum = item.price * countNew
          const changeCart = {...item, quantity: countNew, totalPrice: totalSum}
          newCart.push(changeCart)
        } else {
          newCart.push(item);
        }
      })
      state.cartItems = newCart
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.cartItemId
      )
    }
  }
})

export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total
  }, 0)
}

export default cartSlice.reducer;
export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItem, updateQuantity } = cartSlice.actions;



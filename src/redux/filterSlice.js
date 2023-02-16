import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    selectedCategory: "All"
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
})

export default productSlice.reducer;
export const getSelectedCategory = state => state.product.selectedCategory;
export const { filterCategory } = productSlice.actions;

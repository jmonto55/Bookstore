import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Check status'],
  isLoading: true,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categories[0] === 'Check status') {
        state.categories = ['Under construction'];
      } else {
        state.categories = ['Check status'];
      }
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;

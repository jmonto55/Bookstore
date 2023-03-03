/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const appId = 'zWj3OcMObsviFejn8eLo';
const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zWj3OcMObsviFejn8eLo/books';

// const config = {
//   headers: {
//     'content-type': 'application/json',
//   },
// };

const initialState = {
  booksList: [],
  isLoading: false,
  isLoaded: false,
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    try {
      const resp = await axios.get(apiURL);
      return resp.data;
    } catch (err) {
      return err;
    }
  },
);

export const postBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const resp = await axios.post(apiURL, book);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(`${apiURL}/${id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksList = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
        state.isLoaded = false;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      })
      .addCase(removeBook.rejected, (state) => {
        state.isLoading = false;
        state.isLoaded = false;
      });
  },
});

// export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'zWj3OcMObsviFejn8eLo';
const apiURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

const config = {
  headers: {
    'content-type': 'application/json',
  },
};

const initialState = {
  booksList: [],
  isLoading: true,
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

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    const stringifyData = JSON.stringify(book);
    try {
      await axios.post(apiURL, stringifyData, config);
      return { msg: 'Book added successfully!' };
    } catch (err) {
      return err;
    }
  },
);

export const removeBook = createAsyncThunk(
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

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBook: (state, action) => {
    //   const { title, author } = action.payload;
    //   const newBook = {
    //     id: state.books.length + 1,
    //     title,
    //     author,
    //     category: 'Philosophy',
    //   };
    //   state.books.push(newBook);
    // },
    // removeBook: (state, action) => {
    //   const itemId = action.payload;
    //   state.books = state.books.filter((book) => book.id !== itemId);
    //   state.books.forEach((book, index) => {
    //     book.id = index;
    //   });
    // },
  },
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
      });
  },
});

// export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

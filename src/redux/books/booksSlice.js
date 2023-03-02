import { createSlice } from '@reduxjs/toolkit';

const books = [
  {
    id: 1,
    title: 'Thus Spake Zarathustra',
    author: 'Friedrich Nietzsche',
    category: 'Philosophy',
    current: 'Chapter 17',
    progress: '64%',
  },
  {
    id: 2,
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    category: 'SciFi novel',
    current: 'Chapter 3: "A Lesson Learned"',
    progress: '8%',
  },
  {
    id: 3,
    title: 'The Tunnel',
    author: 'Ernesto Sabato',
    category: 'Novel',
    current: 'Introduction',
    progress: '0%',
  },
];

const initialState = {
  books,
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, title, author) => {
      const bookTitle = title.payload;
      const bookAuthor = author.payload;
      const newBook = {
        id: books.length + 1,
        title: bookTitle,
        author: bookAuthor,
        category: 'Philosophy',
        current: 'Chapter 17',
        progress: '64%',
      };

      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((book) => book.id !== itemId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

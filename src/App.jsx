import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getBooks } from './redux/books/booksSlice';
import BookStore from './components/BookStore';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div data-testid="app" className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookStore />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;

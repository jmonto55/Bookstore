import { Route, Routes } from 'react-router-dom';
import BookStore from './components/BookStore';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
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

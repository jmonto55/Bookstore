import { Route, Routes } from 'react-router-dom';
import BookStoreLogic from './components/BookStoreLogic';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div data-testid="app" className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookStoreLogic />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;

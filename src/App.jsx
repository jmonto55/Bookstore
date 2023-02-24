import { Routes } from 'react-router-dom';
import BookStoreLogic from './components/BookStoreLogic';
import Navbar from './components/Navbar';

function App() {
  return (
    <div data-testid="app" className="app">
      <Navbar />
      <BookStoreLogic />
      <Routes />
    </div>
  );
}

export default App;

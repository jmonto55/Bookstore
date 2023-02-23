import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <div data-testid="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;

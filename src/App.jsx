import { Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div data-testid="app" className="app">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;

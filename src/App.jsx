import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Observer } from 'tailwindcss-intersect';
<<<<<<< HEAD

function App() {
  Observer.start();
=======
import { useEffect } from 'react';

function App() {
  Observer.start();  
>>>>>>> master

  return (
    <div className="scroll-smooth ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

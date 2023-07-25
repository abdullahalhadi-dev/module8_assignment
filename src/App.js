import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Income from './components/Income';
import Expense from './components/Expense';

const App = () => {
  return (
    <BrowserRouter>
      <div className='home'>
        <nav>
          <ul>
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

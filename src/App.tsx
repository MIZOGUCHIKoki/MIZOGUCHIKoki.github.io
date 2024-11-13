import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import Research from './components/Research/Research';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/research' element={<Research />} />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

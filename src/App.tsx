import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navigationbar from './components/Sidebar/Navigationbar';
import Home from './components/Home/Home';
import About from './components/Career/About';
import Contact from './components/Contact/Contact';
import Research from './components/Research/Research';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Sidebar />
      <Navigationbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/research' element={<Research />} />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

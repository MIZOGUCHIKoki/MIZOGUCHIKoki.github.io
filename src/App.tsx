import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navigationbar from './components/Sidebar/Navigationbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Research from './components/Research/Research';
import Timer from './components/Timer/Timer';

export default function App(): JSX.Element {
  const timerMode = true;
  return timerMode ? (
    <Timer />
  ) : (
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

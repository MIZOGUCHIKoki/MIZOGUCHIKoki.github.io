import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Research from './components/Research/Research';
import Sidebar from './components/Sidebar/Sidebar';
import Navigationbar from './components/Sidebar/NavigationBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navigationbar />
      <div style={{
        width: '100%',
        paddingLeft: '10px',
        paddingRight: '10px',
        boxSizing: 'border-box',
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route path="/timer" element={<div>Timer</div>} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
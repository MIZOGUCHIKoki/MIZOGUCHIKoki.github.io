import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Research from './components/Research/Research';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{
        // width: '100%',
        paddingLeft: '10px'
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<div>Home</div>} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route path="/timer" element={<div>Timer</div>} />
            <Route path="/" element={<div>Home</div>} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
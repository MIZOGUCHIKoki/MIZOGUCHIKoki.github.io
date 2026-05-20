import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Activity from './components/Research/Research';
import Sidebar from './components/Sidebar/Sidebar';
import Navigationbar from './components/Sidebar/NavigationBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      {/* ページ要素のコンポーネント名をタイトルに使うラッパーを使用します */}
      <div className="App">
        <Sidebar />
        <Navigationbar />
        <div className="Main">
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<TitleWrapper element={<Home />} />} />
              <Route path="/about" element={<TitleWrapper element={<About />} />} />
              <Route path="/activity" element={<TitleWrapper element={<Activity />} />} />
              <Route path="/research" element={<TitleWrapper element={<Activity />} />} />
              <Route path="/contact" element={<TitleWrapper element={<Contact />} />} />
              {/* <Route path="/timer" element={<TitleWrapper element={<div>Timer</div>} />} /> */}
              <Route path="/" element={<TitleWrapper element={<Home />} />} />
              <Route path="*" element={<TitleWrapper element={<div>404 Not Found</div>} />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div >
    </>
  );
}

// ページ要素のコンポーネント名を取得してタイトルに設定するラッパー
function TitleWrapper({ element }: { element: React.ReactElement }) {
  const type: any = element.type;
  const name = type?.displayName || type?.name || 'Page';

  useEffect(() => {
    document.title = `${name} | 溝口洸熙`;
  }, [name]);

  return element;
}

export default App;
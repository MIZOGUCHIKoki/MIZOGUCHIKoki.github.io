import { useEffect, useState } from 'react';

import Activity from './components/Research/Research';
import Sidebar from './components/Sidebar/Sidebar';
import Navigationbar from './components/Sidebar/NavigationBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { SidebarData } from './components/Sidebar/SidebarData';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(SidebarData[0].label);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPageComponent = () => {
    switch (currentPage) {
      case SidebarData[0].label:
        return <Home />;
      case SidebarData[1].label:
        return <About />;
      case SidebarData[2].label:
        return <Activity />;
      case SidebarData[3].label:
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div className="App">
        <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <Navigationbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="Main">
          {renderPageComponent()}
        </div>
      </div>
    </>
  );
}

export default App;
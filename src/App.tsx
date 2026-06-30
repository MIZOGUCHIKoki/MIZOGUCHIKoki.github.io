import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mypage from './Mypage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mypage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
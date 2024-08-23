import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/office/Footer';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Office" element={<Footer />}></Route>
      </Routes>
    </>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

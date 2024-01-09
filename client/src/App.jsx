import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import MainLayout from './layout/mainLaout';
import About from './pages/about';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route element={<MainLayout></MainLayout>} path='/'>
            <Route element={<Home></Home>} path='/'></Route>
            <Route element={<About></About>} path='/about'></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

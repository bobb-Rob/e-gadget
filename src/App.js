import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Products from './component/Product/Products';
import Home from './component/Home/Home';
import NavBar from "./component/NavBar/NavBar";

import './App.css'


function App(props) {
  const [products, setProducts] = useState(0)

  return (
    <div className="App">               
      < BrowserRouter>
        <NavBar />
        <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Products from './Product/Products';
import Home from './Home/Home';


const RouteSwitch = () => {


  return (
    < BrowserRouter>
        <Routes>
            <Route path = '/' element={<App />}>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
               
            </Route>
        </Routes>
    
    </BrowserRouter>
  );
};

export default RouteSwitch;

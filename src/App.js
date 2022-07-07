import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './component/Product/Products';
import Home from './component/Home/Home';
import NavBar from "./component/NavBar/NavBar";
import Contact from './component/Contact/Contact';
import { DataProvider } from './DataProvider';

import './App.css';

function App() {  
  return (
    <div className="App">
      <DataProvider>             
        < BrowserRouter>
          <NavBar />
          <Routes> 
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Products />} />            
              <Route path='contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>       
      </DataProvider>
    </div>
  );
}

export default App;

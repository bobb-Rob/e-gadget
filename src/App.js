
import NavBar from "./component/NavBar/NavBar";
// import Home from "./component/Home/Home";
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div className="App">
      <NavBar />
            
      <Outlet/>
    </div>
  );
}

export default App;

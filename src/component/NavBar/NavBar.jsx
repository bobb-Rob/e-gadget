import {useContext} from 'react';
import DataContext from '../../DataProvider';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
// import { BiMenu } from 'react-icons/bi';
import CartDisplay from './CartDisplay';


const NavBar = () => {
    const { searchInput, setInput } = useContext(DataContext);
       

  return (
    <div className='NavBar' >        
        <header id='NavBar-wrapper' >
            <div>              
                <span id='gadget-logo' >Gadgette</span> 
            </div>
            <div className='search-bar-div' >
                <input type="search" 
                value={searchInput}
                onChange={(e) => {
                    let search = e.target.value;
                    if(search){
                        setInput(search)
                    }else{
                        setInput('')
                    }
                }}
                placeholder='Search for any Gadget' />
                <button><FaSearch className='search-icon'  /></button>
            </div>
            <CartDisplay />
        </header>
        <div className='Nav-link-div' > 
            <Link className='link' to={'/'}  >Home</Link>   
            <Link className='link' to={'shop'} >Shop</Link>             
            <Link className='link' to={'contact'} >Contact</Link>             
        </div>
    </div>
    );
};

export default NavBar;

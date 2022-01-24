import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { MdOutlineArrowForward } from 'react-icons/md'
import { BiMenu } from 'react-icons/bi'

const NavBar = () => {

  return (
    <div className='NavBar' >        
        <header id='NavBar-wrapper' >
            <div>
                <BiMenu />
                <span id='gadget-logo' >Gadgette</span> 
            </div>
            <div className='search-bar-div' >
                <input type="search" placeholder='Search for any Gadget' />
                <button><FaSearch className='search-icon'  /></button>
            </div>
            <div className='shoppingCart-div' >
                <div>
                    <button className='round-icon-button' >
                        <span>98</span>
                        <FaShoppingCart className='cart' />
                    </button>
                    <p>$34.90</p>
                    <p className='ckeckout-display-btn' >Checkout</p>
                </div>
                <div className='checkout-div' >
                    <button  className='round-icon-button'  >
                        <MdOutlineArrowForward className='checkout' />
                    </button>
                    <p>Checkout</p>
                </div>           
            </div>
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

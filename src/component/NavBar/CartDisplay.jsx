import {useContext} from 'react';
import DataContext from '../../DataProvider';
import { FaShoppingCart } from 'react-icons/fa'
import { MdOutlineArrowForward } from 'react-icons/md'
import Naira from 'react-naira';

const CartDisplay = () => {
    const { cartTotalSum, cart, cartCount, checkoutToggleClickFn } = useContext(DataContext);
   
  return (
    <div className='shoppingCart-div' >
        <div onClick={()=> checkoutToggleClickFn()} style={{cursor: 'pointer'}} >
            <button className='round-icon-button' 
            onClick={()=> checkoutToggleClickFn() }
            >
                <span>
                    { cartCount(cart) }
                </span>
                <FaShoppingCart 
                className='cart' />
            </button>
            <p> 
                <Naira>
                    {cartTotalSum}
                </Naira>
            </p>
            <p className='ckeckout-display-btn'>Checkout</p>
        </div>
        <div style={{cursor: 'pointer'}}
         onClick={()=> checkoutToggleClickFn()}
        className='checkout-div' >
            <button  
            className='round-icon-button'  
            onClick={()=> checkoutToggleClickFn() }
            >
                <MdOutlineArrowForward className='checkout' />
            </button>
            <p>Checkout</p>
        </div>           
    </div>
  );
};

export default CartDisplay;

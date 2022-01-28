import {useContext} from 'react';
import Naira from 'react-naira';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import DataContext from '../../DataProvider';
import CheckoutItemContainer from '../Checkout/checkoutItemContainer';



const Basket = () => {
    const { cart, cartTotalSum, addToCart, removeFromCart, changeQty, backdropClickHandler } = useContext(DataContext);
   
  return (
    <aside style={{position: 'relative'}} >
       <div className='checkout-title-div'>
            <h2 className='checkout-title' >Cart Overview</h2>
            <button  onClick={() => backdropClickHandler()}
            className='checkout-close' >
                <AiOutlineCloseCircle
                style={{
                    fontSize: '30px',
                }} 
                />
            </button>
        </div>
        <div>
            {cart.length === 0 && <h2 style={{paddingLeft: '10px', color: 'red'}} >Cart is empty</h2>}
        </div>
        {cart.map(item => (
            <CheckoutItemContainer 
                item={item} addToCart={addToCart} 
                removeFromCart = {removeFromCart}
                changeQty = {changeQty} key={item.id}
            />
            ))
        }
        <div className='fixed-bottom-checkout-div' >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 20px',
                fontSize: '16px'       
            }} >
                <h3>Subtotal</h3> 
                <h3><Naira>{cartTotalSum}</Naira></h3>
            </div>
            <button 
            onClick={() => alert('Checkout function not implement on this project yet')}
            className='checkout-btn-fixed'             
            >Checkout</button>
        </div>
    </aside>
  );
};

export default Basket;

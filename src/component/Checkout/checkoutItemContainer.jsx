import React from 'react';
import Naira from 'react-naira';

const CheckoutItemContainer = ({ item, addToCart, removeFromCart, changeQty }) => {

    function qtyIncrementBtn(exist){
        return exist.qty + 1
    }

  return (           
    <div className='checkout-item-container'
        style={{display: 'flex', alignItem: 'center'}}>
        <div className='checkout-item-wrapper' >
            <div className='checkout-img-div' >
                <img src={item.img} alt={item.itemName} />
            </div>
            <div style={{display: 'flex' }}>
                <button 
                onClick={() => removeFromCart(item)} 
                className='item-add-subtract-btn'                
                >-</button>
                <input 
                type="number"
                value={item.qty}
                onChange={(e) => changeQty(e,item) }
                className='item-add-subtract-btn item-qty-input'
                />
                <button 
                onClick={() => addToCart(item,qtyIncrementBtn) }
                className='item-add-subtract-btn'                
                >+</button>                    
            </div>
        </div>

        <div className='checkout-item-name-div' >
            <div className='checkout-item-name' > <strong>{item.itemName}</strong></div>
            <div className='checkout-item-price-div' 
            style={{fontSize: '18px'}}>
                {item.qty} x 
               {' '} <Naira>{item.price}</Naira> = {' '}
                <Naira>{item.price * item.qty}</Naira>
            </div>
            <button 
            style={{marginTop: '10px'}}
            onClick={() => removeFromCart(item)}
            className='checkout-btn remove' 
            >Remove Item</button>
        </div>  
    </div> 
  );
};

export default CheckoutItemContainer;

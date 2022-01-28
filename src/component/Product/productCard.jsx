import React from 'react';
import Naira from 'react-naira';
import { useContext, useState } from 'react';
import DataContext from '../../DataProvider';



const ProductCard = ({ products }) => {
    const { addToCart, cart } = useContext(DataContext);    
     
  function qtyIncrementBtn(exist){
    if(exist.qty >= 1){ 
    return exist.qty;      
    }else{    
      return exist.qty + 1;
    }     
  }
    
  function checkIfItemExist(id){    
    let exist = cart.find((item) => item.id === id);
    if(exist){
      return true;
    }else{
      return false
    }
  }


  return (
    <div className='productCard'  >
        <div className='product-img-div' >
            <img src={products.img} alt={products.name} />
        </div>
        <h5 className='itemname'>{products.itemName}</h5>
        <p>Price: <strong><Naira>{products.price}</Naira></strong></p>  
       
        <button 
        className = {checkIfItemExist(products.id) ? 
          'add-to-cart-btn in-cart' : 'add-to-cart-btn'} 
        onClick={ () => addToCart(products, qtyIncrementBtn)}
        > <strong>{ checkIfItemExist(products.id) ? 
        'Already in Cart' : 'Add to Cart' }</strong>
        </button>         
    </div>
  );
};

export default ProductCard;

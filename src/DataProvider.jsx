import {createContext, useState } from 'react';
import { getProducts } from './component/Product/productsArray';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const store = getProducts();  
  const [allProducts, setAllProducts] = useState([...store]);
  const [searchInput, setSearchinput ] = useState('')
 
 
  //Cart States declarations  
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
     
  //Cart States declarations ends
  
  //Add to cart Logic
  const addToCart = (product, fn) => {
    const exist = cart.find(item => item.id === product.id);
    if(exist){
      setCart(
        cart.map(x => x.id === product.id ? {...exist, qty: fn(exist)} : x
          )
      )
    }else{
      setCart([...cart, {...product, qty: 1, isAddedToCart: true }]);
            
    }    
  }
  //Add to cart Logic ends
    
  //Search Item function
  const setInput = (search) => {
    setSearchinput(search);
  }
    

    //Remove to cart Logic
    function removeFromCart(product){
      const exist = cart.find(item => item.id === product.id);
      if(exist.qty === 1){
        setCart(
          cart.filter(item => item.id !== product.id));
      }else{
        setCart(
          cart.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        ));
      }   
    }
    //Remove from cart Logic ends

    //cart item qty input Logic
    function changeQty(e,product){
      const exist = cart.find(item => item.id === product.id);
      let qtyValue = 0;
      if(e.target.value === ''){
        qtyValue = 1;
      }else{
        qtyValue = parseInt(e.target.value);
      }    
      setCart(cart.map(item => item.id === product.id ? {...exist, qty: qtyValue} : item ));   
    }
  //cart item qty input Logic ends
  
  // cart item count
  function cartCount(cartItems){
    let count = cartItems.reduce((prev, curr) => prev + curr.qty - 1, 0)       
    return count + cart.length;
  }

  function cartTotalAmount(){
    let TotalAmount = cart.map(item => item.price * item.qty)
    .reduce((prev, curr) => prev + curr, 0);    
    return TotalAmount;
  }

  const cartTotalSum = cartTotalAmount();

  function checkoutToggleClickFn(){
    setShowCheckout(!showCheckout);   
  }

 function backdropClickHandler(){
    setShowCheckout(false);
  }




  return (
    <DataContext.Provider value={{
      cartTotalSum, showCheckout, checkoutToggleClickFn,
      allProducts, addToCart, cart, removeFromCart, changeQty, cartCount,
      backdropClickHandler, searchInput, setInput
    }} >
      {children}        
    </DataContext.Provider>
    );
};

export default DataContext;

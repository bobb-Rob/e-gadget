
import ProductCard from './productCard';
import Checkout from './CkeckoutSlider';
import Backdrop from './Backdrop';
import './products.css';
import {useContext} from 'react';
import DataContext from '../../DataProvider';


const Products = () => {
  const {  allProducts, showCheckout, backdropClickHandler, searchInput  } = useContext(DataContext);


  let backdrop;
  if(showCheckout){
    backdrop = <Backdrop close={backdropClickHandler} />;
  }

  return (
    <div className='shop-page' >     
      <Checkout show={showCheckout} />
        {backdrop}
        <div className='product-container' >              
              { allProducts.filter(item => { 
                // console.log(item.itemName)              
                if(!searchInput) return true;
                let name = item.itemName.toLowerCase();               
                return name.startsWith(searchInput.toLowerCase());
              }).map(item => {
              return <ProductCard 
                    products={item} key = {item.id}                     
                    />
                })
              }              
        </div>
    </div>
   
  );
};

export default Products;

import React from 'react';
import { getProducts } from './productsArray';
import ProductCard from './productCard';
import { NavLink } from 'react-router-dom'
import './products.css'

const Products = () => {
    const store = getProducts();
    console.log(store);
  return (
    <div className='shop-page' >
      <aside>
        <h4>Category</h4>
        <div>
          <NavLink to={'mobile'} >Mobile Phones</NavLink>
          <NavLink to={'laptop'} >Laptop Computers</NavLink>
          <NavLink to={'camera'} >Cameras</NavLink>
          <NavLink to={'tv'} >TV</NavLink>
          <NavLink to={'others'} >Others</NavLink>
        </div>


      </aside>
        <div className='product-container' >
              
              { store.map(item => {
                return <ProductCard products={item} key={item.id} />
              })  }
              
        </div>

    </div>
   
  );
};

export default Products;

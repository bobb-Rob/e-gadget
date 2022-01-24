import React from 'react';


const ProductCard = ({products}) => {
  return (
    <div className='productCard'  >
        <div className='product-img-div' >
            <img src={products.img} alt={products.name} />
        </div>
        <h5 className='itemname'>{products.itemName}</h5>
        <p>Price: <strong>{products.price}</strong></p>
        
        {/* <div> */}
            <button className='add-to-cart-btn' >Add to Cart</button>
            {/* <div>
                <div>
                    <p>Qty</p>
                    <input type="button" value={quantityInput} />
                </div>
                <button>+</button>
                <button>-</button>
            </div> */}
        {/* </div> */}
       

    </div>
  );
};

export default ProductCard;

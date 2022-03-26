import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({product,handleAddToCart}) => {
    console.log(product)
    const {name,image,price}=product
    return (
        <div className='product'>
          
          <img src={image} alt="" /> 
          <h3>Name:{name}</h3>
          <p>Price:{price}</p> 
          
          <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
               <p className='btn-text'>Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
          </div>
          
        
    );
};

export default Product;
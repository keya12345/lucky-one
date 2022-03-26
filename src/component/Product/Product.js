import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props)
    return (
        <div className='product'>
          
          <img src={props.product.image} alt="" /> 
          <h3>Name:{props.product.name}</h3>
          <p>Price:{props.product.price}</p> 
          <div className='btn-cart'>
          <button className=' btn-text'>Add To Cart
          <FontAwesomeIcon icon={faShoppingCart }></FontAwesomeIcon>
          </button>
          </div>
          
        </div>
    );
};

export default Product;
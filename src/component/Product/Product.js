import React from 'react';

const Product = (props) => {
    console.log(props)
    return (
        <div>
          <h2>{props.product.image}</h2>  
        </div>
    );
};

export default Product;
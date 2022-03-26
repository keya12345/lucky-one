import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products,setProducts]=useState([])

    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="main-container">
            <div className='product-container'>
          
          {
              products.map(product=> <Product product={product} key={product.id}></Product>)
          } 
       </div>
       <div>
           <Cart></Cart>
       </div>
        </div>
    );
};

export default Products;
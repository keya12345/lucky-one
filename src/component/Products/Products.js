import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products,setProducts]=useState([])
    const [cart, setCart] = useState([])
    
    const handleAddToCart=(product)=>{
        console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
    }
        useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    return (
        <div className=" main-container row">
            <div className='product-container col-md-12'>
           {
              products.map(product=> <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
          } 
       </div>
       <div className='col-md-12'>
           <Cart items={cart}></Cart>
       </div>
        </div>
    );
};

export default Products;
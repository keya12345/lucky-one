import React, { useState } from 'react';
import Item from '../Item/Item';
import './Cart.css'
const Cart = ({items,remove}) => {
    const [rendom,setRendom]=useState(null)
  const rendomItem=()=>{
    const indexNum = Math.floor(Math.random()*items.length);
    setRendom(items[indexNum]);
  }

    return (
        <div className='cart'>
            <h4>Selected Items</h4>
            {
            items.map(item=> <Item item={item}></Item>)
            }
            <div className='btn-item'>
            <button onClick={()=>  rendomItem()}>One Item </button>
            {
                rendom &&(
                    <div className='rendomItem'>
                       <h6>{rendom.name}</h6> 
                       <img src={rendom.image} alt="" />
                    </div>
                )
            }
            <button onClick={()=>remove()}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;
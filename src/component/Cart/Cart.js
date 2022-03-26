import React from 'react';
import Item from '../Item/Item';
import './Cart.css'
const Cart = ({items}) => {
    console.log(items)
    return (
        <div className='cart'>
            <h1>Selected Items</h1>
            {
            items.map(item=> <Item item={item}></Item>)
            }
            <div className='btn-item'>
            <button>One Item </button>
            <button>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;
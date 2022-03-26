import React from 'react';
import Item from '../Item/Item';
import './Cart.css'
const Cart = ({items,handleAddToItems}) => {
    console.log(handleAddToItems)
    return (
        <div className='cart'>
            <h4>Selected Items</h4>
            {
            items.map(item=> <Item item={item}></Item>)
            }
            <div className='btn-item'>
            <button onClick={()=>handleAddToItems(items)}>One Item </button>
            <button >Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;
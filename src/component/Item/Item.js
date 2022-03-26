import React from 'react';
import './Item.css'
const Item = ({item}) => {
    return (
        <div >
            <div className='item'>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            </div>
            
            
        </div>
    );
};

export default Item;
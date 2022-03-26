import React from 'react';

const Itemone = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.length}</h1>
        </div>
    );
};

export default Itemone;
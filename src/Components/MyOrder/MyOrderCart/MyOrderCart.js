import React from 'react';
import './MyOrderCart.css';

const MyOrderCart = (props) => {
    const {title, status, _id, price, img} = props.send;
    return (
        <div className='ord-cart'>
                    <div className='img-box'>
                        <img src={img} alt="" />
                    </div>
                    <div className="order-text">
                        <h3><span className='fw-bold'>{title}</span> </h3>                                          
                        <h4>Price: <span className='fw-normal'>{price}</span></h4>
                        <h3>Order Status : <span className="status-color">{status}</span></h3>
                    </div>                   
                    <div > 
                       <button onClick={() => props.func(_id)} className="btton">Cancel Order</button>
                    </div>              
                </div>
    );
};

export default MyOrderCart;


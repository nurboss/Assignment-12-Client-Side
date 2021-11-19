import React from 'react';
import './MyOrderCart.css';

const MyOrderCart = (props) => {
    const {name, email, title, status, _id} = props.send;
    return (
        <div className="col-lg-4 py-3">
                        <div className="cart border ">
                    <div className="order-text">
                        <h4>Service Name: <span className='fw-normal'>{title}</span> </h4>
                        <h4>Name: <span className='fw-normal'>{name}</span></h4>
                        <h4>Email: <span className='fw-normal'>{email}</span></h4>
                        <h3>Order Status : <span className="status-color">{status}</span></h3>
                    </div>
                    <div className="cart-button "> 
                    <button onClick={() => props.func(_id)} className="btton mb-5">Cancel Order</button>
                    </div>
                </div>
                </div>
    );
};

export default MyOrderCart;


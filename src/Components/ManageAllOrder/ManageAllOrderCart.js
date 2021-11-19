import React from 'react';
import './ManageAllOrderCart.css';

const ManageAllOrderCart = (props) => {
    const {title, email, name, address, phone, _id} = props.sentdata;
    return (
        <div className="col-lg-4">
            <div className="main-text mb-3">
                <h2>Car: <span className="fw-normal">{title}</span></h2>
                <h3>Email: <span className="fw-normal">{email}</span></h3>
                <h3>Name: <span className="fw-normal">{name}</span></h3>
                <h3>Address: <span className="fw-normal">{address}</span></h3>
                <h3>Phone: <span className="fw-normal">{phone}</span></h3>
                <div className="cart-button "> 
                <button onClick={() => props.funck(_id)} className="btton mt-4">Delete Order</button>
                </div>
                <div className="cart-button "> 
                <button onClick={() => props.sfunck(_id)} className="shipped-btton mt-4">Click here to Shipped</button>
                </div>
            </div>
            
        </div>
    );
};

export default ManageAllOrderCart;

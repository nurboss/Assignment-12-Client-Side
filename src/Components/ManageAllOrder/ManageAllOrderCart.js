import React from 'react';
import './ManageAllOrderCart.css';

const ManageAllOrderCart = (props) => {
    const {img, price, title, email, name, address, phone, _id} = props.sentdata;
    return (
        <div className='m-ord-cart'>
                    <div className='img-box img-width'>
                        <img src={img} alt="" />
                    </div>
                    <div className="order-text text-width">
                        <h3>Car Name : <span className='fw-bold'>{title}</span> </h3>                                          
                        <h4>Price : {price}</h4>
                        <h3>Name : {name}</h3>
                        <h3>Address : {address}</h3>
                        <h3>Phone : {phone}</h3>
                        <h3>Email : {email}</h3>
                        
                    </div>                   
                    <div className='btn-width' > 
                        <button onClick={() => props.sfunck(_id)} className="shipped-btton mt-4">Click here to Shipped</button>
                        <button onClick={() => props.funck(_id)} className="btton mt-4">Delete Order</button>
                        
                    </div>              
                </div>
    );
};

export default ManageAllOrderCart;


import React from 'react';
import { Link } from 'react-router-dom';
import './CarsCart.css';

const CarsCart = (props) => {
    const {toplevel, year, Starting, dontknow, Estt, img, _id, name, price} = props.cartData;
    return (
        <div className="content col-lg-4 col-md-6 col-md-12 mb-5">
                <div className="cart">
                    <small>{toplevel}</small>
                    <div className="cart-img">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="cart-text">
                    <small>{year}</small>
                    <h4 className="fw-bold">{name}</h4>
                        <div className="d-flex">
                            <div className="me-4">
                                <h4>{price}</h4>
                                <small>{Starting}</small>
                            </div>
                            <div className="ms-4">
                                <h4>{dontknow}</h4>
                                <small>{Estt}</small>
                            </div>
                        </div>
                    </div>
                    <div className="cart-button"> 
                            <Link to={`/singleCart/${_id}`}>
                            <button className="car-btn mx-3 mt-2">Details</button>
                            </Link>                      
                            <Link to={`/order/${_id}`}>
                            <button className="car-btn mx-3 mt-2">Order Now</button>
                            </Link>                      
                    </div>
                </div>
            </div>
    );
};

export default CarsCart;
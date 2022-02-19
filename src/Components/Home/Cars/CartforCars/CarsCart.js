import React from 'react';
import { Link } from 'react-router-dom';
import './CarsCart.css';

const CarsCart = (props) => {
    const {toplevel, year, Starting, dontknow, Estt, img, _id, name, price} = props.cartData;
    return (
        <div className="content col-lg-3 col-md-4 col-md-12 mb-5">
                <div className="cart">
                    <small className='toplevel'>{toplevel}</small>
                    <div className="cart-img">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className='span-div'>
                        <span className='span-price'>{price} as shown</span>
                    </div>
                    <div className="cart-text">
                    <small className='year'>{year}</small>
                    <h4 className="fw-bold car-title">{name}</h4>
                        <div className="d-flex">
                            <div className="me-4">
                                <h4 className='car-price'>{price}</h4>
                                <small className='small-title'>{Starting}</small>
                            </div>
                            <div className="ms-4">
                                <h4 className='car-price'>{dontknow}</h4>
                                <small className='small-title'>{Estt}</small>
                            </div>
                        </div>
                    </div>
                    <div className="cart-button"> 
                            <Link to={`/singleCart/${_id}`}>
                            <button className="car-btn-new mt-2">Explor Your Vehicle</button>
                            </Link>                      
                            {/* <Link to={`/order/${_id}`}>
                            <button className="car-btn mx-3 mt-2">Order Now</button>
                            </Link>                       */}
                    </div>
                </div>
            </div>
    );
};

export default CarsCart;
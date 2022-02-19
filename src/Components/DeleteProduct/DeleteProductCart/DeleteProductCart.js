import React from 'react';

const DeleteProductCart = (props) => {
    const {toplevel, year, Starting, dontknow, Estt, img, _id, name, price} = props.cartData;
    return (
        <div className="content col-lg-4 col-md-6 col-md-12">
                <div className="cart mb-5">
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
                    <button onClick={() => props.funcd(_id)} className="btton mt-4">Delete Cart</button>                      
                            {/* <Link to={`/order/${_id}`}>
                            <button className="car-btn mx-3 mt-2">Order Now</button>
                            </Link>                       */}
                    </div>
                </div>
            </div>           
    );
};

export default DeleteProductCart;
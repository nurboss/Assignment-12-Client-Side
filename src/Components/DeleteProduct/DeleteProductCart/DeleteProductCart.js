import React from 'react';

const DeleteProductCart = (props) => {
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
                    <button onClick={() => props.funcd(_id)} className="btton mt-4">Delete Cart</button>                      
                                                 
                    </div>
                </div>
            </div>
    );
};

export default DeleteProductCart;
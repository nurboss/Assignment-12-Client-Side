import React from 'react';
import './CommentCart.css';
import Rating from '@mui/material/Rating';

const CommentCart = (props) => {
    const {img, description, rating } = props.data;
    return (
        <div class="col-lg-4 col-md-6 col-sm-12" >
                <div style={ {width: "18rem"} } className=" border border-1 pb-5 pt-3  mb-5">
                    <div class="d-flex justify-content-center">
                        <img src={img} class="img-fluid mt-4" alt="..." width="150"/>
                    </div>
                    <div class="card-body">
                      <p class="card-text text-center">{description}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                    <Rating name="read-only" value={rating} readOnly />
                    </div>
                </div>
            </div>
    );
};

export default CommentCart;
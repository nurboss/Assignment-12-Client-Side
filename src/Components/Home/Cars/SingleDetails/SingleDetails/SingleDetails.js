import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleDetails = () => {
    const {id} = useParams();
    const [singleDetails, setSingleDetails] = useState([]);
    useEffect(() => {
        const url = `https://whispering-chamber-86517.herokuapp.com/cars/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleDetails(data))
    }, [id]);
    console.log(id);
    const {name, price, img , _id} = singleDetails;
    return (
        <div className="container screen">
            <div className="row">
                <div className="d-flex justify-content-center align-items-center flex-column mt-5">
                <div className="col-lg-6 push">
                <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-lg-6 push">
                <h1 className="fw-bold">{name}</h1>
                <p>{price}</p>
                <Link to={`/order/${_id}`}>
                <button className="car-btn">Order This Car</button>
                </Link>
                </div> 
                
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;
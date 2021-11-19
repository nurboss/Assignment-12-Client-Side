import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import CommentCart from './CommentCart/CommentCart';
import './Comments.css';

const Comments = () => {
    const [review, setReview] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch('https://whispering-chamber-86517.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data));

    }, []);
    return (
        <div className="container">
            <h1 className="fw-bold text-center">Our Happy Clients.</h1>
            <div className="row py-5">
            {
                review.map(data => <CommentCart
                key={data._id}
                data={data}
                name={user.displayName}
                ></CommentCart>)
            }
            </div>
        </div>
    );
};

export default Comments;
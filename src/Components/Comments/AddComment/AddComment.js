import React from 'react';
import { useForm } from "react-hook-form";
import './AddComment.css';

const AddComment = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://whispering-chamber-86517.herokuapp.com/addreview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
            alert('Your order is Succenss.')
            }
        })
       
        
    
    };
    return (
        <div className="container mt-5 order-from bottom">
            <h2 className="text-center fw-bold">Give a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("img")} placeholder="img link" /> <br />

                <textarea style={{ width: "100%", border: "2px solid black", padding: "10px", marginBottom: "10px", resize: "none" }} className="text-area" type="text" {...register("description")} placeholder="Comment"  /> <br />

                
                <input type="number"  {...register("rating")} placeholder="Rating 1-5 Only" /> <br />

                <input style={{border:"none"}} className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddComment;
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const Addproduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://whispering-chamber-86517.herokuapp.com/addcars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
            alert('Your added the product Successfully.')
            }
        })              
    };
    return (
        <div className="container mt-5 order-from bottom ">
            <h2 className="text-center fw-bold">Add New Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("img")} placeholder="img link" /> <br />
                <input {...register("name")} placeholder="Name" /> <br />

                <input type="number"  {...register("year")} placeholder="Year" /> <br />

                <input type="number"  {...register("price")} placeholder="pice" /> <br />

                <input style={{border:"none"}} className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default Addproduct;
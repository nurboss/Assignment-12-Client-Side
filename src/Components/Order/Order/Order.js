import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import './Order.css';
const Order = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const {id} = useParams();
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://whispering-chamber-86517.herokuapp.com/cars/${id}`)
        .then(res => res.json())
        .then(data => setOrderDetails(data))
    }, [id]);
    console.log(orderDetails);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = "Pending..."
        fetch('https://whispering-chamber-86517.herokuapp.com/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then()
        alert('Your order is Succenss.')
        
    
    };

    const {name} = orderDetails;
    return (
        <div className="container mt-5 order-from bottom">
            <form onSubmit={handleSubmit(onSubmit)}>
                
                {(user.email || user.displayName) && <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />} <br />

                {(user.email || user.displayName) && <input type="email" defaultValue={user.email} {...register("email")} placeholder="Email"  />} <br />


                {name && <input defaultValue={name} {...register("title")} placeholder="Service Name" />} <br />

                <input {...register("address")} placeholder="Your Address" /> <br />

                <input type="number" {...register("phone")}  placeholder="Phone" /> <br />

                <input style={{border:"none"}} className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default Order;
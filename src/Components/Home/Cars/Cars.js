import React, { useEffect, useState } from 'react';
import CarsCart from './CartforCars/CarsCart';

const Cars = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://whispering-chamber-86517.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setServices(data.slice(0, 6)));
    }, []);
    return (
        <div className="container mt-5 service-title">
            <h2 className="text-center fw-bold my-5 top-title">Find Your Dream Car.</h2>
            <div className="container mt-5 pb-5">
                <div className="row">
                    {
                        services.map(data => <CarsCart
                        key={data._id}
                        cartData={data}
                        ></CarsCart> )
                    }
                </div>
            </div>
        
        </div>
    );
};

export default Cars;
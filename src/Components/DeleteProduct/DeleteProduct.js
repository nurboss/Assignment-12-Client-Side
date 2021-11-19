import React, { useEffect, useState } from 'react';
import DeleteProductCart from './DeleteProductCart/DeleteProductCart';

const DeleteProduct = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://whispering-chamber-86517.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    const handleAllDelete = id => {
    fetch(`https://whispering-chamber-86517.herokuapp.com/deletecars/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(result => {
        if(result.acknowledged){
        alert('Are you Sure you want to cancel you order.')
    const remainig = services.filter(service => service._id !== id);
    setServices(remainig);
        }
        
    });
    }
    return (
        <div className="container mt-5 service-title">
            <h2 className="text-center my-5 top-title">Manage All Product</h2>
            <div className="container mt-5 pb-5">
                <div className="row">
                    {
                        services.map(data => <DeleteProductCart
                        key={data._id}
                        cartData={data}
                        funcd={handleAllDelete}
                        ></DeleteProductCart> )
                        
                    }
                </div>
            </div>
        
        </div>
    );
};

export default DeleteProduct;
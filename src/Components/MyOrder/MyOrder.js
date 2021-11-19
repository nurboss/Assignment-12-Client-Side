import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import MyOrderCart from './MyOrderCart/MyOrderCart';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        const url = `https://whispering-chamber-86517.herokuapp.com/myorder/${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyOrder(data));

    }, [user.email]);
    
    

    const handleDeleteOrder = id => {
        fetch(`https://whispering-chamber-86517.herokuapp.com/deleteOrde/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(result => {
            if(result.acknowledged){
            alert('Are you Sure you want to cancel you order.')
        const remainig = myOrder.filter(service => service._id !== id);
            setMyOrder(remainig);
            }
            
        });
    }
    return (
        <div>
            <div className="container bottom">
                <h1 className="text-center order-text my-3">{user.email} your Orders</h1>
                <div className="row my-5">
                {
                    myOrder.map(data => <MyOrderCart
                    key={data._id}
                    send={data}
                    func={handleDeleteOrder}
                    ></MyOrderCart> )
                }
                </div>
            </div>
            
        </div>
    );
};

export default MyOrders;
import React from 'react';
import img from '../../../../images/jeep.png';
import './NewCar.css';

const NewCars = () => {
    return (
        <div className="container my-5">
            <div className="row">
            <div className="col-lg-5 col-sm-12">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="col-lg-7 col-sm-12">
                <div className="bold-title">
                <h2>Feel The Best Experience With Our Cars.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut soluta doloribus beatae architecto velit at dolores voluptatibus ipsum adipisci cum hic odit obcaecati iste ea ullam totam, dicta, eligendi quod ex laboriosam. Omnis ad vero, blanditiis consectetur nisi sint minus sit error officia. Voluptatibus, dignissimos. Laudantium sunt ratione sequi veniam.</p>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default NewCars;
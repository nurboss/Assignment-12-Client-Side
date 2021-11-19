import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/mclaren-orange-big.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="row view d-flex justify-content-center align-items-center flex-lg-row flex-column-reverse">
                <div className="col-lg-6 col-md-12 col-sm-12   banner-title">
                    <h2>Buy The Best Quality Car's From Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Adipisci ipsa suscipit quis quae at libero sunt, vero recusandae reiciendis <br /></p>
                    <Link to="/allCars">
                    <button className="car-btn">Explore more</button>
                    </Link> 
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img className="img-fluid" src={banner} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;
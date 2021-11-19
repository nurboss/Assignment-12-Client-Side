import React from 'react';
import './ExtraServices.css';

const ExtraServices = () => {
    return (
        <div className="container">
            <h1 className="top-title">Why HeroCars</h1>
            <div className="row py-5">
                <div className="col-lg-4">      
                    <i class="fas fa-car"></i>
                    <h2 className="whyus-title">Shop</h2>
                    <p className="whyue-text">Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.</p>
                </div>
                <div className="col-lg-4">
                    <i class="far fa-newspaper"></i>
                    <h2 className="whyus-title">News</h2>
                    <p className="whyue-text">Our very own Cars.com experts offer unbiased coverage of today's automotive landscape. Yes, there will be dad jokes.</p>
                </div>
                <div className="col-lg-4">
                    <i class="fas fa-tools"></i>
                    <h2 className="whyus-title">Service and Repair</h2>
                    <p className="whyue-text">Watch do-it-yourself tutorials or find local repair options.</p>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-lg-4">
                    <i class="fas fa-search-plus"></i>
                    <h2 className="whyus-title">Research</h2>
                    <p className="whyue-text">View side-by-side comparisons, payment calculators, video reviews, and consumer reviews. These let you hear the good and the bad from current car owners.</p>
                </div>
                <div className="col-lg-4">
                    <i class="fas fa-balance-scale-right"></i>
                    <h2 className="whyus-title">Sell</h2>
                    <p className="whyue-text">Stay up to date on the latest selling advice from our experts. Coming soon: Get your car appraised and sell to interested buyers in your area.</p>
                </div>
                <div className="col-lg-4">
                    <i class="fas fa-shield-alt"></i>
                    <h2 className="whyus-title">Certified Pre-Owned</h2>
                    <p className="whyue-text">Learn why you should consider a Certified Pre-Owned car, and get info on manufacturer programs.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraServices;
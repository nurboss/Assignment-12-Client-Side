import React from 'react';
import notfound from '../../images/page-not-found.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container">
            <img className="img-fluid" src={notfound} alt="" />
            
        </div>
    );
};

export default NotFound;
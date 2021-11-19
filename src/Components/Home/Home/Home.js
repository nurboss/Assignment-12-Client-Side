import React from 'react';
import Comments from '../../Comments/Comments';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import ExtraServices from '../ExtraServices/ExtraServices';
import NewCars from './NewCars/NewCars';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <Comments></Comments>
            <ExtraServices></ExtraServices>
            <NewCars></NewCars>

        </div>
    );
};

export default Home;
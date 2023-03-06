import React from 'react';
import Best from '../../Best/Best';
import TopSurgicals from '../../TopSurgicals/TopSurgicals';
import Banner from '../Banner/Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <TopSurgicals></TopSurgicals>
            <Products></Products>
            <Best></Best>
        </div>
    );
};

export default Home;
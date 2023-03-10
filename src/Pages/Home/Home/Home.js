import React from 'react';
import Best from '../../Best/Best';
import TopSurgicals from '../../TopSurgicals/TopSurgicals';
import Banner from '../Banner/Banner';
import Glasses from '../Glasses/Glasses';
import Message from '../Message/Message';
import Testimonial from '../Testimonial/Testimonial';
import Products from './Products/Products';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <TopSurgicals></TopSurgicals>
            <Products></Products>
            <Glasses></Glasses>
            <Best></Best>
            
            <Testimonial></Testimonial>
            <Message></Message>
        </div>
    );
};

export default Home;
import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <CustomerFeedback></CustomerFeedback>

        </div>
    );
};

export default Home;
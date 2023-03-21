import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <Services></Services>
            <CustomerFeedback></CustomerFeedback>

        </div>
    );
};

export default Home;
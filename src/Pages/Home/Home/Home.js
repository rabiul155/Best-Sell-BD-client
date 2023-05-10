import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import Services from '../Services/Services';
import Banner2 from '../Banner2/Banner2';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <Categories></Categories>
            <Advertise></Advertise>
            <Services></Services>
            <CustomerFeedback></CustomerFeedback>

        </div>
    );
};

export default Home;
import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import Services from '../Services/Services';
import Banner2 from '../Banner2/Banner2';
import FlashSale from '../FlashSale/FlashSale';
import TopSell from '../TopSell/TopSell';
import SellerOffer from '../../../Shared/SellerOffer/SellerOffer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <Categories></Categories>
            <Advertise></Advertise>
            <TopSell></TopSell>
            <Services></Services>
            <FlashSale></FlashSale>
            <CustomerFeedback></CustomerFeedback>
            <SellerOffer></SellerOffer>

        </div>
    );
};

export default Home;
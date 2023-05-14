import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SellerOffer = () => {

    const { logOut } = useContext(AuthContext)
    return (
        <div className='flex justify-center items-center bg-[#caebfd] text-center h-[350px]'>
            <div className=' '>
                <h3 className='font-bold text-3xl '>Want To Sell Product ?</h3>
                <h1 className='font-bold lg:font-extrabold text-6xl my-6'>40% OFF FOR FIRST POST </h1>
                <Link to='/signup'>
                    <button onClick={logOut} className=' uppercase px-8 py-5 rounded bg-white text-black font-bold text-xl'>register now <FaArrowRight className=' inline-block pb-1'></FaArrowRight></button>
                </Link>


            </div>
        </div>
    );
};

export default SellerOffer;
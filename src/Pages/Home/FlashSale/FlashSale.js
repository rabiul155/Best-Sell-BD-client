import React from 'react';
import sale from '../../../assets/sale_banner.png'
import delivery1 from '../../../assets/delivery_1.png'
import delivery2 from '../../../assets/delivery_2.png'

const FlashSale = () => {
    return (
        <div className=' mx-4 my-10'>
            <img className=' rounded-md' src={sale} alt="" />
            <div className='my-8 grid lg:grid-cols-2 gap-10'>
                <div className='grid grid-cols-2 gap-2 lg:gap-6 p-4 lg:p-10 border-2 border-gray-200 rounded-md bg-gradient-to-r' style={{ background: "linear-gradient(97.29deg, #FFFFFF -1.43%, rgba(230, 222, 255, 0.634676) 43.99%, rgba(242, 238, 255, 0) 111.12%)" }}>
                    <div>
                        <span className='inline-block px-4 py-1 lg:mb-10 font-bold bg-pink-500 text-white rounded-sm'>Always Free</span>
                        <h3 className='text-xl font-bold text-blue-600 my-2 lg:my-5'>Order Pickup</h3>
                        <p>Choose Order Pickup & we’ll have it waiting for you inside the store.</p>

                    </div>

                    <div>
                        <img src={delivery1} alt="" />
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-2 lg:gap-6 p-4 lg:p-10 border-2 border-gray-200 rounded-md' style={{ background: "linear-gradient(97.29deg, #FFFFFF -1.43%, rgba(255, 224, 222, 0.64) 43.99%, rgba(242, 238, 255, 0) 111.12%)" }}>
                    <div>
                        <span className='inline-block px-4 py-1  lg:mb-10 font-bold bg-pink-500 text-white rounded-sm'>Fast Delivery</span>
                        <h3 className='text-xl font-bold text-blue-600 my-2 lg:my-5'>Delivery Location</h3>
                        <p>We will delivery your goods on the same day on your door.</p>

                    </div>

                    <div>
                        <img src={delivery2} alt="" />
                    </div>

                </div>

            </div>

        </div >
    );
};

export default FlashSale;
import React from 'react';
import { FaStar } from 'react-icons/fa';
import laptop from '../../../assets/topSellLaptop.jpg'
import tablet from '../../../assets/topSellTab.jpg'
import phone from '../../../assets/topSellPhone.jpg'
import tv from '../../../assets/topSellTv.jpg'

const TopSell = () => {
    return (
        <div className='m-4 lg:m-10'>
            <h2 className='mb-10 font-bold text-4xl'>Top Sell Last Month</h2>
            <hr />
            <div className='my-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 '>

                <div className='relative rounded-md items-center grid grid-cols-2 gap-4 lg:gap-10 bg-[#f6f7fb] p-4 pt-16 lg:p-10'>
                    <div className="avatar">
                        <div className="w-36 h-36 lg:h-full lg:w-full rounded-full">
                            <img src={laptop} alt='laptop' />
                        </div>
                    </div>
                    <div className='absolute top-6 right-8 text-white px-3 pt-[2px] pb-[4px] rounded-md font-semibold  bg-black inline-block'>
                        sold out
                    </div>
                    <div>
                        <p className=' font-bold text-gray-600 my-3 text-xl'>Laptop</p>
                        <h2 className=' font-bold text-gray-700 text-lg cursor-pointer hover:text-blue-600 duration-300'>HP Probook 450 G8 Core i5 11th Gen 15.6 inch Laptop </h2>
                        <div className=' flex items-center my-2'>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <span className=' text-gray-500 text-sm m-1'>4564</span>
                        </div>
                        <div className=' flex justify-start items-center mt-6'>
                            <p className=' font-bold text-gray-600 text-xl'>price </p>
                            <p className='text-3xl mx-2 font-bold  text-[#ff497c]'>$555.0</p>
                        </div>
                    </div>
                </div>

                <div className='relative rounded-md items-center grid grid-cols-2 gap-4 lg:gap-10 bg-[#f6f7fb] p-4 pt-16 lg:p-10'>
                    <div className="avatar">
                        <div className="w-36 h-36 lg:h-full lg:w-full rounded-full">
                            <img src={tablet} alt='laptop' />
                        </div>
                    </div>
                    <div className='absolute top-6 right-8 text-white px-3 pt-[2px] pb-[4px] rounded-md font-semibold  bg-black inline-block'>
                        flash sell
                    </div>
                    <div>
                        <p className=' font-bold text-gray-600 my-3 text-xl'>Tablet</p>
                        <h2 className=' font-bold text-gray-700 text-lg cursor-pointer hover:text-blue-600 duration-300'>Samsung Galaxy Tab A7 10.4 inch LTE (2020) </h2>
                        <div className=' flex items-center my-2'>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <span className=' text-gray-500 text-sm m-1'>6764</span>
                        </div>
                        <div className=' flex justify-start items-center mt-6'>
                            <p className=' font-bold text-gray-600 text-xl'>price </p>
                            <p className='text-3xl mx-2 font-bold  text-[#ff497c]'>$400.0</p>
                        </div>
                    </div>
                </div>

                <div className='relative rounded-md items-center grid grid-cols-2 gap-4 lg:gap-10 bg-[#f6f7fb] p-4 pt-16 lg:p-10'>
                    <div className="avatar">
                        <div className="w-36 h-36 lg:h-full lg:w-full rounded-full">
                            <img src={phone} alt='laptop' />
                        </div>
                    </div>
                    <div className='absolute top-6 right-8 text-white px-3 pt-[2px] pb-[4px] rounded-md font-semibold  bg-black inline-block'>
                        20% off
                    </div>
                    <div>
                        <p className=' font-bold text-gray-600 my-3 text-xl'>Phone</p>
                        <h2 className=' font-bold text-gray-700 text-lg cursor-pointer hover:text-blue-600 duration-300'>Samsung Galaxy S23 Ultra (12/512GB) </h2>
                        <div className=' flex items-center my-2'>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <span className=' text-gray-500 text-sm m-1'>4564</span>
                        </div>
                        <div className=' flex justify-start items-center mt-6'>
                            <p className=' font-bold text-gray-600 text-xl'>price </p>
                            <p className='text-3xl mx-2 font-bold  text-[#ff497c]'>$335.0</p>
                        </div>
                    </div>
                </div>
                <div className='relative rounded-md items-center grid grid-cols-2 gap-4 lg:gap-10 bg-[#f6f7fb] p-4 pt-16 lg:p-10'>
                    <div className="avatar">
                        <div className="w-36 h-36 lg:h-full lg:w-full rounded-full">
                            <img src={tv} alt='laptop' />
                        </div>
                    </div>
                    <div className='absolute top-6 right-8 text-white px-3 pt-[2px] pb-[4px] rounded-md font-semibold  bg-black inline-block'>
                        sold out
                    </div>
                    <div>
                        <p className=' font-bold text-gray-600 my-3 text-xl'>Smart TV</p>
                        <h2 className=' font-bold text-gray-700 text-lg cursor-pointer hover:text-blue-600 duration-300'>Samsung T5700 43 Inch Full HD Smart TV </h2>
                        <div className=' flex items-center my-2'>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <span className=' text-gray-500 text-sm m-1'>5664</span>
                        </div>
                        <div className=' flex justify-start items-center mt-6'>
                            <p className=' font-bold text-gray-600 text-xl'>price </p>
                            <p className='text-3xl mx-2 font-bold  text-[#ff497c]'>$785.0</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TopSell;
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import sl1 from '../../../assets/sl1.png'
import sl2 from '../../../assets/sl2.png'
import sl3 from '../../../assets/sl3.png'
import { FaAngleRight } from "react-icons/fa";



// import required modules
import { Autoplay, Pagination } from "swiper";

const Banner2 = () => {
    return (
        <div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-col-reverse lg:grid grid-cols-2 bg-amber-50 mb-10'>
                        <div className='flex justify-center items-center'>
                            <div className='text-center sm:text-left'>
                                <div className='py-2  font-bold  bg-amber-50 font-sans text-lg my-4'>Latest product</div>
                                <h2 className=' text-3xl font-bold '>Get 20% discount on</h2>
                                <h2 className=' text-5xl font-bold my-5'>Vision 43 Inch LED TV</h2>
                                <button className=' font-bold text-lg py-3 border-black bg-amber-50 border-b-2 '>
                                    Buy Now <FaAngleRight className=' inline-block'></FaAngleRight>
                                </button>
                            </div>

                        </div>
                        <div>
                            <img src={sl1} alt="" />

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col-reverse lg:grid grid-cols-2 bg-amber-50'>
                        <div className='flex justify-center items-center'>
                            <div className='text-center sm:text-left'>
                                <div className='py-2  font-bold  bg-amber-50 font-sans text-lg my-4'>Latest product</div>
                                <h2 className=' text-3xl font-bold '>Get 5% discount on</h2>
                                <h2 className=' text-5xl font-bold my-5'>Asar Extensa 15 Pro</h2>
                                <button className=' font-bold text-lg py-3 border-black bg-amber-50 border-b-2 '>
                                    Buy Now <FaAngleRight className=' inline-block'></FaAngleRight>
                                </button>
                            </div>

                        </div>
                        <div>
                            <img src={sl2} alt="" srcSet="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col-reverse lg:grid grid-cols-2 bg-amber-50'>
                        <div className='flex justify-center items-center'>
                            <div className='text-center sm:text-left'>
                                <div className='py-2 font-bold  bg-amber-50 font-sans text-lg my-4'>Latest product</div>
                                <h2 className=' text-3xl font-bold '>Get 15% discount on</h2>
                                <h2 className=' text-5xl font-bold my-5'>Samsung Galaxy S22</h2>
                                <button className=' font-bold text-lg py-3 border-black bg-amber-50 border-b-2 '>
                                    Buy Now <FaAngleRight className=' inline-block'></FaAngleRight>
                                </button>
                            </div>

                        </div>
                        <div>
                            <img src={sl3} alt="" />

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner2;
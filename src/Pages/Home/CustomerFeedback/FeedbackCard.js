import React from 'react';
import { SwiperSlide } from 'swiper/react';

const FeedbackCard = ({ feed }) => {

    const { photo, name, message, rate, experience } = feed;
    return (

        <SwiperSlide >
            <div className=" card-compact rounded-tl-[40px]  rounded-br-[40px] p-4  w-full bg-base-200 shadow-xl">
                <div className=' flex justify-between items-center'>
                    <div className="flex justify-start items-center">
                        <div className="mr-4">
                            <img className="w-16 rounded-full" src={photo} alt='none' />
                        </div>
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p>Experience : {experience}</p>
                        </div>
                    </div>
                    <div className=" font-bold">
                        <p>Rating : {rate}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p>{message}</p>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default FeedbackCard;
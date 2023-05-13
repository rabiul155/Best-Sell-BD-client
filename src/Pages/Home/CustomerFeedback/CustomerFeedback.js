import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStarHalfAlt } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";

const CustomerFeedback = () => {

    const { user } = useContext(AuthContext)


    const { data: feedback = [], refetch } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await fetch('https://78-laptop-resalse-server.vercel.app/feedback')
            const data = await res.json();
            return data;

        }
    })

    const handleSubmit = event => {

        event.preventDefault()

        if (user?.uid) {
            const form = event.target;
            const message = form.feedback.value;
            const experience = form.experience.value;
            const rate = form.rate.value;
            const feedback = {
                photo: user?.photoURL,
                name: user?.displayName,
                message,
                experience,
                rate
            }
            console.log(feedback)

            fetch('https://78-laptop-resalse-server.vercel.app/feedback', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(feedback)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('feedback added')
                    form.reset();
                    refetch();
                })
        }


        else {
            toast.success('Please log in to add your feedback')
        }


    }


    return (
        <div className='m-4 lg:m-10'>
            <h2 className=' text-4xl  mb-10 font-bold'>Our Customer Feedback</h2>
            <hr />

            <div className='my-10'>
                <Swiper
                    freeMode={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        }
                    }}
                    speed={1000}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        feedback?.map(feed =>
                            <SwiperSlide key={feed._id}>
                                <div className="my-10 min-h-[200px] card-compact rounded-tl-[40px]  rounded-br-[40px] p-4  w-full bg-base-200 shadow-xl">
                                    <div className=' flex justify-between '>
                                        <div className="flex justify-start items-center">
                                            <div className="mr-4">
                                                <img className="w-16 rounded-full" src={feed.photo} alt='none' />
                                            </div>
                                            <div>
                                                <h2 className="card-title">{feed.name}</h2>
                                                <p>Experience : {feed.experience}</p>
                                            </div>
                                        </div>
                                        <div className="font-bold flex gap-1">

                                            <FaStarHalfAlt className=' text-yellow-400' size={22}></FaStarHalfAlt>
                                            <FaStarHalfAlt className=' text-yellow-400' size={22}></FaStarHalfAlt>
                                            <FaStarHalfAlt className=' text-yellow-400' size={22}></FaStarHalfAlt>
                                            <FaStarHalfAlt className=' text-yellow-400' size={22}></FaStarHalfAlt>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>{feed.message}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>


            {/* take user feedback */}

            <div className=''>
                <form onSubmit={handleSubmit}>
                    <label className="label">
                        <span className="label-text">Add your user Experience</span>
                    </label>
                    <textarea name='feedback' className="textarea textarea-bordered w-full" placeholder="feedback"></textarea>
                    <div className=' grid md:grid-cols-2 gap-5'>
                        <div>
                            <label className="label">
                                <span className="label-text">Your Experience</span>
                            </label>
                            <select name='experience' className="select select-bordered w-full ">
                                <option defaultValue>Good</option>
                                <option>Fair</option>
                                <option>Excelent</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Rate Us</span>
                            </label>
                            <select name='rate' className="select select-bordered w-full ">
                                <option defaultValue>5 </option>
                                <option>4 </option>
                                <option>3 </option>
                                <option>2 </option>
                                <option>1 </option>

                            </select>
                        </div>
                    </div>
                    <div className='flex justify-center m-5'>
                        <button className=' btn btn-secondary '>Send Feedback</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CustomerFeedback;
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.png'
import banner2 from '../../../assets/banner-mockup.png'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div >
            <section className="text-gray-900 bg-lime-50">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className=" font-bold leading-none text-4xl md:text-5xl lg:text-6xl">Used Item
                            <span className="text-secondary"> For Buy</span>  and Sale
                        </h1>
                        <div className="mt-6 h-[50px] mb-8 text-3xl font-bold sm:mb-12 text-secondary">
                            <Typewriter

                                options={{
                                    strings: ['Sell your old product and buy new product!!!', 'Upgrade Your Tech, Simplify Your Life!!!'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                }}
                            />
                        </div>

                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" className="px-7 py-[10px] text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Add Product</Link>
                            <Link rel="noopener noreferrer" className="px-7 py-[10px] text-lg font-semibold border rounded dark:border-gray-100 dark:bg-amber-500">Buy Product</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-6 mt-8 lg:mt-0 ">
                        <img src={banner} alt="" className="object-cover duration-300 hover:scale-105  lg:w-[800px] " />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Banner;
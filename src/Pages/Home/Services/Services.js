
import React from 'react';
import delivery from '../../../assets/delivery.png'

import replacemnet from '../../../assets/replace.PNG'
import waren from '../../../assets/4.webp'

const Services = () => {
    return (
        <div>
            <h2 className=' text-center text-4xl font-bold text-secondary p-6'>Our Popular Services </h2>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                <div className=' flex justify-center '>
                    <div className="card card-compact w-64 bg-base-100 shadow-xl hover:shadow-slate-400 ">
                        <figure><img src={delivery} alt="Shoes" className='bg-base-300' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Free Home Delivery</h2>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center'>
                    <div className="card card-compact hover:shadow-slate-400  w-64 bg-base-100 shadow-xl">
                        <figure><img src={replacemnet} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">7 Days Replacement</h2>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center'>
                    <div className="card card-compact hover:shadow-slate-400  w-64 bg-base-100 shadow-xl">
                        <figure><img src={waren} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">1 Year Service Warrnty</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
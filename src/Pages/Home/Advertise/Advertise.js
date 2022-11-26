import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertise`)
            const data = await res.json();
            return data
        }
    })

    console.log(advertise)


    return (
        <div>
            {
                advertise &&
                <div className='m-5'>
                    <h2 className='text-4xl text-secondary text-center font-bold'>Our Popular Product</h2>

                    <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                        {
                            advertise?.map(product => <AdvertiseCard
                                key={product._id}
                                product={product}
                            ></AdvertiseCard>)
                        }
                    </div>

                </div>
            }
        </div>
    );
};

export default Advertise;
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../Category/BookingModal';
import ProductCard from '../../Category/ProductCard';


const Advertise = () => {

    const [booking, setBooking] = useState(null);

    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertise`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwtToken')}`
                }
            })
            const data = await res.json();
            return data
        }
    })

    console.log(advertise)


    return (
        <div>
            <div>
                {
                    advertise &&
                    <div className='m-5'>
                        <h2 className='text-4xl text-secondary text-center font-bold'>Our Popular Product</h2>

                        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                            {
                                advertise?.map(product => <ProductCard
                                    key={product._id}
                                    product={product}
                                    setBooking={setBooking}
                                ></ProductCard>)
                            }
                        </div>

                    </div>
                }
            </div>

            {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                >
                </BookingModal>
            }
        </div>
    );
};

export default Advertise;
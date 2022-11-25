import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const Category = () => {
    const [booking, setBooking] = useState(null)
    const products = useLoaderData();

    return (
        <div>
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    setBooking={setBooking}
                ></ProductCard>)
            }

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

export default Category;
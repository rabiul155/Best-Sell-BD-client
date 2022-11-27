import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const ProductCard = ({ product, setBooking }) => {
    console.log(product);
    const { about, condition, date, location, orginalPrice, phone, picture, productName, resalePrice, sellerName, useTime, verify } = product;
    return (

        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
                <figure><img className=' w-96 h-80' src={picture} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{productName}</h2>
                    <div className=' flex justify-between font-bold'>
                        <p>Orgila Price : ${orginalPrice}</p>
                        <p>Resale Price : ${resalePrice}</p>
                    </div>
                    <p>{about}</p>
                    <div className=' flex justify-between'>
                        <p>Condition : {condition}</p>
                        <p>Use Time : {useTime}</p>
                    </div>
                    <div className=' flex justify-between'>
                        <p className=' font-semibold'>
                            Seller :
                            {
                                verify &&
                                <span className='text-blue-700 '><FaCheckCircle className='inline-block mx-1'></FaCheckCircle></span>
                            }
                            {sellerName}</p>
                        <p>Location : {location}</p>
                    </div>
                    <p>Phone : {phone}</p>
                    <p>Date : {date}</p>
                    <div className="card-actions justify-end">
                        <label
                            className="btn btn-primary"
                            htmlFor="my-modal"
                            onClick={() => setBooking(product)}> Book Now</label>
                    </div>
                </div>
            </div>

            {/*.............. modal................ */}

        </div>
    );
};

export default ProductCard;
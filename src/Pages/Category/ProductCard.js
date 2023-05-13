import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ProductCard = ({ product, setBooking }) => {
    console.log(product);
    const { user } = useContext(AuthContext);

    const { _id, about, condition, date, location, orginalPrice, phone, picture, productName, resalePrice, sellerName, useTime, verify } = product;


    const handleBooking = (product) => {

        if (user?.uid) {

            setBooking(product)

        }
        else {
            toast.success('Please log in first')
        }

    }
    return (

        <div >
            <div className="card card-compact mx-auto w-80 lg:w-[360px] bg-base-100 hover:shadow-slate-400 shadow-xl my-4">
                <figure><img className='hover:scale-105 overflow-hidden duration-300 w-80 lg:w-[360px] lg:h-[300px]' src={picture} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{productName}</h2>
                    <div className=' flex justify-between font-bold'>
                        <div><p>Orgila Price : ${orginalPrice}</p></div>
                        <div><p>Resale Price : ${resalePrice}</p></div>
                    </div>


                    <div className=' flex justify-between'>
                        <div className='font-semibold'>
                            Seller : {sellerName}
                            {
                                verify &&
                                <span className='text-blue-700 '><FaCheckCircle className='inline-block mx-1'></FaCheckCircle></span>
                            }
                        </div>
                        <div>Location : {location}</div>
                    </div>
                    <div className=' flex justify-between'>
                        <div>Phone : {phone}</div>
                        <div>Date : {date}</div>
                    </div>

                    <div className="card-actions justify-end pt-4">
                        <Link to={`/productDetails/${_id}`}> <button className=' btn btn-secondary '>View Details</button></Link>

                        <label
                            className="btn btn-primary h-8"
                            htmlFor="my-modal"
                            onClick={() => handleBooking(product)}> Book Now</label>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ProductCard;
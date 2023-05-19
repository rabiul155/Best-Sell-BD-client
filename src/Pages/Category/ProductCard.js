import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './ProductCart.css'

const ProductCard = ({ product, setBooking }) => {

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
            {/* <div className="card duration-300 card-compact mx-auto w-80 lg:w-[360px] bg-base-100 hover:shadow-slate-400 shadow-xl my-4">
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
            </div> */}

            <div className=' card-section  hover:shadow-xl rounded-md items-center grid lg:grid-cols-2 gap-4 lg:gap-6 bg-[#f6f7fb] p-4 pb-16 lg:pl-10 lg:pt-6 lg:pb-12'>
                <div>
                    <div >
                        <div className=" w-full rounded-full">
                            <img className='card-img duration-300' src={picture} alt='laptop' />
                        </div>

                    </div>

                    {/* button section  */}


                </div>
                <div className='absolute hidden lg:block top-4 right-4 text-white px-3 pt-[2px] pb-[4px] rounded-md font-semibold  bg-black '>
                    available
                </div>
                <div>
                    <p className=' font-bold text-gray-600 my-3 text-xl'>{productName}</p>

                    <div className='flex lg:flex-col justify-between'>
                        <div className='font-semibold'>
                            Seller : {sellerName}
                            {
                                verify &&
                                <span className='text-blue-700 '><FaCheckCircle className='inline-block mx-1'></FaCheckCircle></span>
                            }
                        </div>
                        <div>Location : {location}</div>
                    </div>


                    <div className=' flex lg:flex-col justify-between'>
                        <div>Phone : {phone}</div>
                        <div>Date : {date}</div>
                    </div>
                    <div className=' flex items-center '>
                        <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                        <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                        <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                        <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                        <span className=' text-gray-500 text-sm m-1'>4564</span>
                    </div>
                    <div className=' flex justify-start items-center '>
                        <p className=' font-bold text-gray-600 text-[18px]'>price :</p>
                        <p className='text-xl ml-1 font-bold  text-[#ff497c]'>Tk {resalePrice}<del className='text-[16px] ml-1 font-semibold text-gray-600 '>Tk {orginalPrice} </del></p>
                    </div>
                    <div className=" button-section flex justify-end ">
                        <Link to={`/productDetails/${_id}`}> <button className='btn-1 '>View Details</button></Link>

                        <label
                            className="btn-2"
                            htmlFor="my-modal"
                            onClick={() => handleBooking(product)}>Order Now</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";

const ProductDetails = () => {

    const product = useLoaderData();
    console.log(product);
    const { _id, about, condition, date, location, orginalPrice, phone, picture, productName, resalePrice, sellerName, useTime, verify } = product;
    return (

        <div className=' m-4'>

            <div className='sm:w-1/2 mx-auto'>
                <img src={picture} alt='' className="rounded-lg w-full shadow-2xl py-8" />
                <h2 className=' text-xl font-bold pt-8 px-2'>Seller Name : {sellerName}
                    {
                        verify &&
                        <span className='text-blue-700 '><FaCheckCircle className='inline-block mx-1'></FaCheckCircle></span>
                    }
                </h2>
                <h2 className=' font-bold px-2'>About Product : {about}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra sm:w-1/2 mx-auto mt-4">

                    <thead>
                        <tr>
                            <th className=' font-bold text-lg'>Specification</th>
                            <th className=' font-bold text-lg'>Details</th>

                        </tr>
                    </thead>
                    <tbody>


                        <tr>
                            <th>Product Name</th>
                            <td>{productName}</td>
                        </tr>
                        <tr>
                            <th>Orginal Price</th>
                            <td>{orginalPrice}</td>
                        </tr>
                        <tr>
                            <th>Resale Price</th>
                            <td>{resalePrice}</td>
                        </tr>


                        <tr>
                            <th>Codition</th>
                            <td>{condition}</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>{location}</td>
                        </tr>
                        <tr>
                            <th>Used Time</th>
                            <td>{useTime}</td>
                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <td>{phone}</td>
                        </tr>
                        <tr>
                            <th>Date Posted</th>
                            <td>{date}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDetails;
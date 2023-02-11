import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ProductCard = ({ product, setBooking }) => {
    console.log(product);
    const { user } = useContext(AuthContext);

    const { _id, about, condition, date, location, orginalPrice, phone, picture, productName, resalePrice, sellerName, useTime, verify } = product;


    // const handleWishlist = (_id) => {
    //     if (user?.uid) {
    //         const wishlitProduct = {

    //             email: user?.email,
    //             picture,
    //             productName,
    //             resalePrice
    //         }
    //         fetch('https://78-laptop-resalse-server.vercel.app/wishlist', {
    //             method: "POST",
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(wishlitProduct)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 toast.success('porduct added to wishlist')
    //             })


    //     }

    //     else {
    //         toast.success('Please log in first')
    //     }
    // }



    const handleBooking = (product) => {

        if (user?.uid) {

            setBooking(product)

        }
        else {
            toast.success('Please log in first')
        }

    }
    return (

        <div>
            <div className="card card-compact w-80 lg:w-96 bg-base-100 hover:shadow-slate-400 shadow-xl my-4">
                <figure><img className=' w-80 lg:w-96 lg:h-80' src={picture} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{productName}</h2>
                    <div className=' flex justify-between font-bold'>
                        <p>Orgila Price : ${orginalPrice}</p>
                        <p>Resale Price : ${resalePrice}</p>
                    </div>

                    {/* <div className=' flex justify-between'>
                        <p>Condition : {condition}</p>
                        <p>Use Time : {useTime}</p>
                    </div> */}

                    <div className=' flex justify-between'>
                        <p className='font-semibold'>
                            Seller : {sellerName}
                            {
                                verify &&
                                <span className='text-blue-700 '><FaCheckCircle className='inline-block mx-1'></FaCheckCircle></span>
                            }
                        </p>
                        <p>Location : {location}</p>
                    </div>
                    <div className=' flex justify-between'>
                        <p>Phone : {phone}</p>
                        <p>Date : {date}</p>
                    </div>

                    <div className="card-actions justify-end pt-4">
                        <Link to={`/productDetails/${_id}`}> <button className=' btn btn-secondary'>View Details</button></Link>

                        <label
                            className="btn btn-primary"
                            htmlFor="my-modal"
                            onClick={() => handleBooking(product)}> Book Now</label>
                    </div>
                </div>
            </div>

            {/*.............. modal................ */}

        </div>
    );
};

export default ProductCard;
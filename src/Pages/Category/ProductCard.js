import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';

const ProductCard = ({ product, setBooking }) => {
    console.log(product);
    const { user } = useContext(AuthContext);

    const { _id, about, condition, date, location, orginalPrice, phone, picture, productName, resalePrice, sellerName, useTime, verify } = product;

    const handleWishlist = (_id) => {
        const wishlitProduct = {

            email: user?.email,
            picture,
            productName,
            resalePrice
        }
        fetch('https://78-laptop-resalse-server.vercel.app/wishlist', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlitProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('porduct added to wishlist')
            })


    }
    return (

        <div>
            <div className="card card-compact w-96 bg-base-100 hover:shadow-slate-400 shadow-xl my-4">
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
                            Seller : {sellerName}
                            {
                                verify &&
                                <span className='text-blue-700 '><FaCheckCircle className='inline-block mx-1'></FaCheckCircle></span>
                            }
                        </p>
                        <p>Location : {location}</p>
                    </div>
                    <p>Phone : {phone}</p>
                    <p>Date : {date}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleWishlist(_id)} className=' btn btn-secondary'>Add To Wishlist</button>

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
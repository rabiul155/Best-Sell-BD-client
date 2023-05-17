import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import UserReview from './UserReview';

const ProductDetails = () => {

    const product = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(product);
    const { _id, about, condition, date, location, orginalPrice, phone, picture, productName, resalePrice, sellerName, useTime, verify } = product;


    const { data: userReviewData = [], refetch } = useQuery({
        queryKey: ['userReview', _id],
        queryFn: () => fetch(`https://78-laptop-resalse-server.vercel.app/review/${_id}`)
            .then(res => res.json())
    })



    const handleSubmit = event => {
        event.preventDefault()
        if (user?.uid) {
            const rev = event.target.review.value;
            const reviewPacket = {
                productId: _id,
                name: user?.displayName,
                photo: user?.photoURL,
                email: user?.email,
                date: new Date().toLocaleDateString(),
                review: rev
            }
            console.log(reviewPacket)
            fetch(`https://78-laptop-resalse-server.vercel.app/review`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviewPacket)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    event.target.reset();
                    refetch();
                });
        }
        else {
            toast.success('Please login first')
        }

    }


    return (

        <div className=' mt-4'>

            <div className='lg:w-1/2 mx-auto'>
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
                            <td>Tk {orginalPrice}</td>
                        </tr>
                        <tr>
                            <th>Resale Price</th>
                            <td>Tk {resalePrice}</td>
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
            <div className="form-control lg:w-3/4 my-4 mx-auto">
                <h2 className=' text-2xl font-bold mb-4'>Our customer review</h2>
                {

                    userReviewData?.map(review => <UserReview
                        key={review._id}
                        reviewData={review}
                        refetch={refetch}
                    ></UserReview>)
                }
                <form onSubmit={handleSubmit} className="input-group w-full">
                    <input name='review' type="text" placeholder="Add comment" className="input input-bordered w-full" />
                    <button type='submit' className="btn ">
                        Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;
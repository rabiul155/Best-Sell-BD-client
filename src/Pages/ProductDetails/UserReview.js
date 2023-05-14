import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { HiDotsVertical } from "react-icons/hi";
import { toast } from 'react-hot-toast';

const UserReview = ({ reviewData, refetch }) => {
    const { user } = useContext(AuthContext)
    const { _id, photo, name, date, review, email } = reviewData;
    console.log(reviewData);


    const handleDelete = () => {

        fetch(`https://78-laptop-resalse-server.vercel.app/deleteReview/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Review deleted');
                refetch();

            })

    }
    return (
        <div className=' rounded-md bg-base-200 shadow-md hover:shadow-lg mb-4'>
            <div className='relative flex items-center p-3'>
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photo} alt='' />
                    </div>
                </div>

                <div className='px-4'>
                    <h3 className=' font-bold'>{name}</h3>
                    <p className=' text-sm'>{date}</p>
                </div>
                <div className='absolute top-6 cursor-pointer right-6'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=""><HiDotsVertical size={22}></HiDotsVertical></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
                            {
                                user?.email === email &&
                                <li><a onClick={handleDelete}>Delete</a></li>
                            }
                            <li><a>Like</a></li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className=' rounded-md bg-base-300'>
                <p className='px-4 p-2'>{review}</p>
            </div>
        </div>
    );
};

export default UserReview;
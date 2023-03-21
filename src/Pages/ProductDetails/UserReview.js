import React from 'react';

const UserReview = ({ reviewData }) => {
    const { photo, name, date, review } = reviewData;
    return (
        <div className=' rounded-md bg-base-200 shadow-md hover:shadow-lg mb-4'>
            <div className=' flex items-center p-3'>
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photo} alt='' />
                    </div>
                </div>
                <div className='px-4'>
                    <h3 className=' font-bold'>{name}</h3>
                    <p className=' text-sm'>{date}</p>
                </div>
            </div>
            <div className=' rounded-md bg-base-300'>
                <p className='px-4 p-2'>{review}</p>
            </div>
        </div>
    );
};

export default UserReview;
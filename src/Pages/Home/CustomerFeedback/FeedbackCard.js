import React from 'react';

const FeedbackCard = ({ feed }) => {

    const { photo, name, message, rate, experience } = feed;
    return (
        <div className=' m-5'>
            <div className="card card-compact hover:shadow-slate-400  w-96 bg-base-100 shadow-xl">
                <div className="avatar flex justify-center m-8">
                    <div className="w-24 rounded-full">
                        <img src={photo} alt='none' />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{message}</p>
                    <div className="card-actions font-bold">
                        <p>Rating : {rate}</p>
                        <p>Experience : {experience}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
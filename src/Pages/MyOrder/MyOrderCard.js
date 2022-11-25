import React from 'react';

const MyOrderCard = ({ order }) => {
    console.log(order)
    const { productName, resalePrice, picture } = order;
    return (
        <div className=' m-5'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className=' w-48 h-48' src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">{productName}</h2>

                    <p className=' text-lg font-semibold'>Price : {resalePrice}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">pay</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyOrderCard;
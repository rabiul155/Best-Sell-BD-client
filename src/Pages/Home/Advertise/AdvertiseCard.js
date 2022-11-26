import React from 'react';

const AdvertiseCard = ({ product }) => {

    const { productName, about, picture } = product;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{about}</p>

                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;
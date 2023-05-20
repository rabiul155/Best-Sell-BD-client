import React from 'react';
import { Link } from 'react-router-dom';
import successImg from '../../assets/success.gif'

const Payment = () => {
    return (
        <div className=' flex justify-center mt-6'>
            <div className=" w-80 ">

                <figure><img src={successImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=' font-bold text-center text-xl m-3'>Payment succssfull</h2>
                    <div className="card-actions mt-6">
                        <Link to='/' className="w-full btn btn-primary"> Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
import React from 'react';
import hp from '../../../assets/hp.jpg'
import dell from '../../../assets/dell.jpg'
import asus from '../../../assets/asus.webp'
import { Link } from 'react-router-dom';
import laptop from '../../../assets/laptop.png'
import monitor from '../../../assets/monitor.png'
import phone from '../../../assets/phone.png'

const Categories = () => {
    const categories = [
        {
            id: 1,

            category: 'laptop',
            photo: laptop
        },
        {
            id: 2,
            category: 'monitor',
            photo: monitor
        },
        {
            id: 3,
            category: 'phone',
            photo: phone
        }
    ]



    return (
        <div className=' mt-6'>
            <h2 className=' text-4xl font-bold text-center text-secondary'>All Categories</h2>
            <div className=' m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categories.map(category =>
                        <div key={category.id} className=" w-96   bg-base-100 ">
                            <figure><img className='bg-lime-50 rounded-lg' src={category.photo} alt="Shoes" /></figure>
                            <div className="card-actions w-full mt-4">

                                <Link className="btn shadow-lg hover:shadow-slate-400 btn-primary w-full"
                                    to={`/category/${category.category}`}>Available {category.category}</Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Categories;
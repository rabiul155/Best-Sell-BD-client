
import hp from '../../../assets/hp.jpg'
import dell from '../../../assets/dell.jpg'
import asus from '../../../assets/asus.webp'
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        {
            id: 1,

            brand: 'hp',
            photo: hp
        },
        {
            id: 2,
            brand: 'dell',
            photo: dell
        },
        {
            id: 3,
            brand: 'asus',
            photo: asus
        }
    ]



    return (
        <div>
            <h2 className=' text-4xl font-bold text-center text-secondary'>All Categories</h2>
            <div className=' m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categories.map(category =>
                        <div key={category.id} className=" w-96 bg-base-100 ">
                            <figure><img className='bg-lime-50 rounded-lg' src={category.photo} alt="Shoes" /></figure>
                            <div className="card-actions w-full mt-4">

                                <Link className="btn btn-primary w-full"
                                    to={`/category/${category.brand}`}>Available Product</Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Categories;
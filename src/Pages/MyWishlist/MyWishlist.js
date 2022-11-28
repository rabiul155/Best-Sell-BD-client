import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyWishlist = () => {
    const { user } = useContext(AuthContext);

    const { data: myWishlist = [], isLoading, } = useQuery({
        queryKey: ['myWishlist', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`)
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Confirm Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myWishlist?.map((product, index) =>

                                <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src={product.picture} alt='none' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.productName}</td>
                                    <td>{product.resalePrice}</td>
                                    <td>
                                        <button className='btn btn-sm btn-secondary'>Pay</button>
                                    </td>
                                </tr>

                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWishlist;
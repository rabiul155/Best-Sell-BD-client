import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import CartProduct from './CartProduct';

const Cart = () => {

    const { user } = useContext(AuthContext);

    const { data: myOrder = [], isLoading, refetch } = useQuery({
        queryKey: ['myOrder', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://78-laptop-resalse-server.vercel.app/myOrder?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwtToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(myOrder)


    return (
        <div className=' grid grid-cols-4 mt-6'>
            <div className='col-span-3'>
                {
                    myOrder.map(product => <CartProduct
                        key={product._id}
                        product={product}
                        refetch={refetch}

                    ></CartProduct>)
                }


            </div>

            <div className="card w-72 bg-base-200 shadow-xl">


            </div>





        </div>
    );
};

export default Cart;
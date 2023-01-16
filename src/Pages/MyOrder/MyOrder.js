
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {

    const { user } = useContext(AuthContext);

    const { data: myOrder = [], isLoading } = useQuery({
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


    console.log(myOrder);

    if (isLoading) {
        return <Loading></Loading>
    }

    if (!myOrder) {
        return <>
            <h2 className=' text-4xl font-bold text-center text-purple-700 m-8'>You haven't Order Yet. Please, Order First </h2>
        </>

    }




    return (
        <div>

            {
                myOrder.map(order => <MyOrderCard
                    key={order._id}
                    order={order}
                ></MyOrderCard>)
            }

        </div>

    );
};

export default MyOrder;
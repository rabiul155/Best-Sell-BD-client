
import { async } from '@firebase/util';
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
            const res = await fetch(`http://localhost:5000/myOrder?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
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
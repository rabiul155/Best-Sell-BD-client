
import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {

    const { data: myOrder = [], isLoading } = useQuery({
        queryKey: ['myOrder'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/myOrder');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
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
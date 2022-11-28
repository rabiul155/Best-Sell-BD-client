import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const MyBuyer = () => {



    const { data: myBuyer = [], isLoading, refetch } = useQuery({
        queryKey: ['myBuyer'],
        queryFn: async () => {
            const res = await fetch(`https://78-laptop-resalse-server.vercel.app/users?role=buyer`)
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = _id => {
        const permission = window.confirm('are you sure to delete this user ')
        if (permission) {
            fetch(`https://78-laptop-resalse-server.vercel.app/users/${_id}`, {
                method: "DELETE"

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('user deleted')
                    refetch()
                })

        }

    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th >Index</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th >Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myBuyer.map((buyer, index) =>
                                <tr>
                                    <th >{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 md:w-24 rounded-full">
                                                <img src={buyer?.picture} alt='none' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{buyer.name}</td>
                                    <td >{buyer.email}</td>
                                    <td><button onClick={() => handleDelete(buyer._id)} className="btn btn-sm">Delete</button></td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBuyer;
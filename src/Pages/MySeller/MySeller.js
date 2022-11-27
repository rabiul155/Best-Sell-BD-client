import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const MySeller = () => {


    const { data: mySeller = [], isLoading, refetch } = useQuery({
        queryKey: ['mySeller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=seller`)
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
            fetch(`http://localhost:5000/users/${_id}`, {
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
                            <th>Index</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            mySeller.map((seller, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={seller?.photo} alt='none' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button onClick={() => handleDelete(seller._id)} className="btn btn-sm">Delete</button></td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MySeller;
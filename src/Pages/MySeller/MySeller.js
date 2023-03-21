import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const MySeller = () => {


    const { data: mySeller = [], isLoading, refetch } = useQuery({
        queryKey: ['mySeller'],
        queryFn: async () => {
            const res = await fetch(`https://78-laptop-resalse-server.vercel.app/users?role=seller`)
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

    const handleVerify = email => {
        fetch(`https://78-laptop-resalse-server.vercel.app/verify/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('user verified');
            })
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
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            mySeller.map((seller, index) =>
                                <tr>
                                    <th >{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 md:w-16 rounded-full">
                                                <img src={seller?.picture} alt='none' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{seller.name}</td>
                                    <td >{seller.email}</td>
                                    <td><button onClick={() => handleVerify(seller.email)} className=' btn btn-xs md:btn-sm'>Verify</button></td>
                                    <td><button onClick={() => handleDelete(seller._id)} className="btn btn-xs md:btn-sm">Delete</button></td>
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
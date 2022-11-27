import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = () => {


    const { user } = useContext(AuthContext);

    const { data: myProduct = [], isLoading, refetch } = useQuery({
        queryKey: ['myProduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category?email=${user?.email}`)
            const data = await res.json();
            return data
        }
    })

    console.log(myProduct)

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = (_id) => {
        const confirm = window.confirm('do you want to delete this product')
        if (confirm) {
            fetch(`http://localhost:5000/category/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success("item deleted")
                    refetch();
                })
        }

    }

    const handleUpdate = _id => {
        const confirm = window.confirm('do you want to advertise this product')
        const advertise = {
            advertise: true
        }


        if (confirm) {
            fetch(`http://localhost:5000/category/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(advertise)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success("added to popular product")
                    refetch();
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
                            <th>Image</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProduct?.map((product, index) =>
                                <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-20 rounded">
                                                <img src={product.picture} alt="Tailwind-CSS-Avatar-component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.productName}</td>
                                    <td>{product.status}</td>
                                    <td><button disabled={product.advertise} onClick={() => handleUpdate(product._id)} className="btn btn-sm btn-primary">Advertise</button></td>
                                    <td><button onClick={() => handleDelete(product._id)} className="btn btn-sm">Delete</button></td>
                                </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;
import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';

const CartProduct = ({ product, refetch }) => {
    const { _id, productName, picture, resalePrice, quantity } = product;

    const { user } = useContext(AuthContext);

    const [count, setCount] = useState(quantity);

    const totalPrice = count * resalePrice;


    const handleIncrese = () => {

        if (count <= 5) {
            setCount(count + 1);

            const quantity = {
                quantity: count + 1

            }
            fetch(`https://78-laptop-resalse-server.vercel.app/updateCart?email=${user?.email}&_id=${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(quantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch();
                })
        }

    }

    const handleDecrease = () => {

        if (count >= 2) {
            setCount(count - 1);
            const quantity = {
                quantity: count - 1

            }
            fetch(`https://78-laptop-resalse-server.vercel.app/updateCart?email=${user?.email}&_id=${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(quantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch();
                })

        }

    }
    const handleDelete = () => {

        const confirm = window.confirm('are you sure to delete this item')
        if (confirm) {
            fetch(`https://78-laptop-resalse-server.vercel.app/deleteCartProduct?email=${user?.email}&_id=${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('item deleted');
                    refetch();

                })

        }

    }

    return (
        <div>

            <div className=' m-4'>
                <div className=" bg-base-100 shadow-xl p-2 lg:flex justify-between ">
                    <div className=' flex items-center'>
                        <div className="avatar">
                            <div className="w-24 h-24 rounded-xl hover:shadow-2xl shadow-2xl">
                                <img alt='' src={picture} />
                            </div>
                        </div>
                        <div className='px-6'>
                            <h2 className="card-title">{productName}</h2>
                            <h2 className="card-title">Price : ${resalePrice}</h2>
                            {/* <p>{about}</p> */}

                        </div>
                    </div>
                    <div className="flex items-center mt-4 lg:mt-0">


                        <button onClick={() => handleDecrease()} className=' px-3 text-3xl bg-base-200  border rounded-sm border-gray-300'>-</button>
                        <p className='text-2xl bg-base-200   border rounded-sm px-3 '>{count}</p>
                        <button onClick={() => handleIncrese()} className=' text-3xl bg-base-200 px-2 border rounded-sm border-gray-300'>+</button>


                        <h2 className="card-title mx-4">${totalPrice}</h2>
                        <button onClick={() => handleDelete()} className=""><FaTrashAlt className=' text-amber-600 text-4xl mx-6'></FaTrashAlt></button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default CartProduct;
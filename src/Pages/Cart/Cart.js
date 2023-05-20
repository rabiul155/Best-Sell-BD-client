import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import CartProduct from './CartProduct';
import { toast } from 'react-hot-toast';


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

    const paidProduct = myOrder?.filter(order => order.status === 'paid')
    console.log(paidProduct);
    const unpaidProduct = myOrder?.filter(order => order.status === 'unpaid')
    console.log(unpaidProduct);

    if (isLoading) {
        return <Loading></Loading>
    }

    let totalCost = 0;
    let shipping = 0;
    let productCost = 0;
    let vat = 0

    if (unpaidProduct) {

        for (const product of unpaidProduct) {
            const price = product.resalePrice;
            const quantity = product.quantity;
            const productPrice = price * quantity;
            productCost = productCost + productPrice;

        }
        shipping = unpaidProduct.length * 50;
        vat = Math.round(productCost * .05);
        totalCost = productCost + shipping + vat;


    }


    const handlePay = () => {
        if (myOrder) {
            const order = {
                price: totalCost,
                name: myOrder[0].name,
                email: myOrder[0].email,
                phone: myOrder[0].phone,
                location: myOrder[0].location,

            }

            fetch('https://78-laptop-resalse-server.vercel.app/payment', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    window.location.replace(data.url)

                })

        }
        else {
            toast.error('Please Order first')
        }
    }


    return (
        <div>
            <div className='mx-4 grid grid-cols-1 lg:grid-cols-3 mt-6'>

                <div className='lg:col-span-2'>

                    {
                        myOrder?.length === 0 &&

                        <>
                            <h2 className=' text-4xl font-bold text-center text-purple-700 '>You haven't Order Yet. Please, Order First </h2>
                        </>

                    }


                    {
                        unpaidProduct?.map(product => <CartProduct
                            key={product._id}
                            product={product}
                            refetch={refetch}

                        ></CartProduct>)
                    }

                    <h2 className=' text-xl font-bold underline underline-offset-8 '>Paid Product </h2>

                    {
                        paidProduct?.map(product => <CartProduct
                            key={product._id}
                            product={product}
                            refetch={refetch}

                        ></CartProduct>)
                    }


                </div>

                <div className="mt-4 w-full mx-auto rounded hover:scale-105 duration-300 lg:w-80">
                    <div className=" w-full lg:w-80 bg-base-200  shadow-xl">
                        <div className="card-body">
                            <h2 className=" text-2xl font-bold text-center pb-4">Checkout</h2>
                            <p className=' font-bold py-1 text-xl'>Product Cost : Tk {productCost}</p>
                            <p className=' font-bold py-1 text-xl'>Shipping Cost : Tk {shipping}</p>
                            <p className=' font-bold py-1 text-xl'>Vat : Tk {vat}</p>
                            <hr className='border border-gray-500' />
                            <p className=' font-bold py-1 text-xl'>Total Cost : Tk {totalCost}</p>
                            <div className="card-actions justify-end mt-4">
                                <label onClick={handlePay} className="btn w-full">Pay Bill</label>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;
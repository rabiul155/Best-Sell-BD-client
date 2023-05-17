import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import CartProduct from './CartProduct';
import img1 from '../../assets/p1.png'
import img2 from '../../assets/p2.png'
import img3 from '../../assets/p3.png'

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

    let totalCost = 0;
    let shipping = 0;
    let productCost = 0;
    let vat = 0

    if (myOrder) {

        for (const prosuct of myOrder) {
            const price = prosuct.resalePrice;
            const quantity = prosuct.quantity;
            const productPrice = price * quantity;
            productCost = productCost + productPrice;

        }
        shipping = myOrder.length * 50;
        vat = Math.round(productCost * .05);
        totalCost = productCost + shipping + vat;


    }


    console.log(myOrder)


    return (
        <div className='mx-4 grid grid-cols-1 lg:grid-cols-3 mt-6'>

            <div className='lg:col-span-2'>

                {
                    myOrder?.length === 0 &&

                    <>
                        <h2 className=' text-4xl font-bold text-center text-purple-700 '>You haven't Order Yet. Please, Order First </h2>
                    </>

                }
                {
                    myOrder?.map(product => <CartProduct
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
                            <label htmlFor="my-modal-3" className="btn w-full">Pay Bill</label>

                        </div>
                    </div>
                </div>



                {/* modal section  */}

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Pay Your bill
                            via following payment method</h3>
                        <h3 className="text-lg font-bold">Total Cost : Tk {totalCost}</h3>
                        <div className='grid grid-cols-3 gap-4 my-8'>
                            <img src={img1} alt="" className=' lg:w-full shadow-2xl rounded-lg hover:shadow-2xl' />
                            <img src={img2} alt="" className=' lg:w-full shadow-2xl  rounded-lg hover:shadow-2xl' />
                            <img src={img3} alt="" className='lg:w-full shadow-2xl  rounded-lg hover:shadow-2xl' />
                        </div>
                    </div>
                </div>

            </div>





        </div>
    );
};

export default Cart;
import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';
import SellerOffer from '../../Shared/SellerOffer/SellerOffer';



const Category = () => {

    const [searchText, setSearchText] = useState('')
    const [booking, setBooking] = useState(null)
    const allProducts = useLoaderData();
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')



    useEffect(() => {
        if (search) {
            const findProduct = allProducts.filter(product => product.productName.toLowerCase().indexOf(search) !== -1)
            setProducts(findProduct)
        }
        else {

            setProducts(allProducts)
        }

    }, [search, allProducts])

    const handleSearch = () => {
        setSearch(searchText.toLowerCase());



    }

    return (


        <div className=''>

            {/* search product */}
            <div className='bg-[#caebfd] p-10 grid grid-cols-1 lg:grid-cols-3  items-center'>


                <div className=' flex justify-end'>
                    <select className=" font-bold rounded  w-full lg:w-80 px-4 py-3 mx-4 ">
                        <option disabled>Sort By</option>
                        <option>Name</option>
                        <option>Price</option>
                        <option>Date</option>
                    </select>
                </div>

                {/* <select class=" font-bold rounded w-80 px-4 py-3 mx-4 mb-4 md:mb-0">
                    <option disabled="">Condition</option>
                    <option>Execelent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>

                <select class=" font-bold rounded w-80  px-4 py-3 mx-4 mb-4 md:mb-0">
                    <option disabled="">Select Location</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Barishal</option>
                    <option>Rajsahi</option>
                    <option>Khulna</option>
                    <option>Sylhet</option>
                    <option>Rangpur</option>
                    <option>Mymensingh</option>
                </select> */}

                <div className="form-control col-span-2 m-4">
                    <div className="input-group mx-auto">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered w-full lg:w-2/3" />
                        <button onClick={handleSearch} className="btn w-24 lg:w-36">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>


            </div>

            <div className='m-6 grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    products.length !== 0 ?
                        <>
                            {

                                products?.map(product => <ProductCard
                                    key={product._id}
                                    product={product}
                                    setBooking={setBooking}
                                ></ProductCard>)
                            }

                        </>
                        :
                        <>
                            <div className=' text-3xl font-bold text-center my-5'>
                                Product Not Found
                            </div>
                        </>
                }

            </div>

            <SellerOffer></SellerOffer>

            {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                >
                </BookingModal>
            }
        </div>
    );
};

export default Category;
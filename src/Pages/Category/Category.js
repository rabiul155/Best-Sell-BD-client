import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';
import SellerOffer from '../../Shared/SellerOffer/SellerOffer';



const Category = () => {

    const allProducts = useLoaderData();

    const [search, setSearch] = useState('')

    const [searchText, setSearchText] = useState()

    const [products, setProducts] = useState([])

    const [booking, setBooking] = useState(null)


    const show = () => {

        console.log(searchText);
    }


    useEffect(() => {

        if (!searchText) {
            setProducts(allProducts)
            setSearch('')
        }

        else if (search) {
            const findProduct = allProducts.filter(product => product.productName.toLowerCase().indexOf(search) !== -1)
            setProducts(findProduct)
        }


        else {
            setProducts(allProducts)

        }

    }, [search, allProducts, searchText])

    const handleSearch = (event) => {
        event.preventDefault()
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



                <div className="form-control col-span-2 m-4">
                    <form onSubmit={handleSearch} className="input-group mx-auto">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered w-full lg:w-2/3" />
                        <button type='submit' className="btn w-24 lg:w-36">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>

                <button onClick={show}>
                    click
                </button>


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
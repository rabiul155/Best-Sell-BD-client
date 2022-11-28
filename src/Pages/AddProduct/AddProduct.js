import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const AddProduct = () => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const date = new Date().toLocaleDateString()

    const imageHostingKey = process.env.REACT_APP_imgbb_api_key;
    const { register, handleSubmit } = useForm();

    const handleStoreProduct = data => {

        const image = data.picture[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)

                if (imgData?.success) {
                    const brand = data.brand;
                    const productName = data.productName;
                    const picture = imgData.data.url;
                    const location = data.location;
                    const orginalPrice = data.orginalPrice;
                    const resalePrice = data.resalePrice;
                    const useTime = data.uses;
                    const condition = data.condition;
                    const sellerName = data.sellerName;
                    const phone = data.phone;
                    const about = data.about;

                    const product = {
                        brand,
                        productName,
                        picture,
                        location,
                        orginalPrice,
                        resalePrice,
                        useTime,
                        condition,
                        sellerName,
                        phone,
                        about,
                        date,
                        advertise: false,
                        status: 'available',
                        email: user?.email

                    }

                    fetch('https://78-laptop-resalse-server.vercel.app/category', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            console.log('product stored in database')
                            toast.success('product stored in db')
                            navigate('/dashbord/myProduct')


                        })

                }

            })






    }








    return (
        <div className=' mx-5'>
            <h2 className=' text-4xl m-5 font-bold text-center text-primary'>Add A Product </h2>

            <form onSubmit={handleSubmit(handleStoreProduct)}>

                <div className=' sm:grid grid-cols-2 gap-5 m-5' >
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text ">Brand Name</span>
                        </label>
                        <select
                            {...register('brand')}
                            className="select select-bordered w-full ">
                            <option selected>hp</option>
                            <option>dell</option>
                            <option>asus</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <p className="label-text">Product Name</p>
                        </label>
                        <input  {...register('productName')} required type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>



                <div className=' sm:grid grid-cols-2 gap-5 m-5' >
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input  {...register('picture')} required type="file" placeholder="Type here" className="  w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input  {...register('location')} required type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>


                <div className=' sm:grid grid-cols-2 gap-5 m-5' >
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Orginal Price </span>
                        </label>
                        <input  {...register('orginalPrice')} required type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input  {...register('resalePrice')} required type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className=' sm:grid grid-cols-2 gap-5 m-5' >
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Total Years Of Use </span>
                        </label>
                        <select
                            {...register('uses')}
                            className="select select-bordered w-full ">
                            <option selected>1 years</option>
                            <option>2 years</option>
                            <option>3 years</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select
                            {...register('condition')}
                            className="select select-bordered w-full ">
                            <option selected>good</option>
                            <option>fair</option>
                            <option>excelent</option>
                        </select>
                    </div>
                </div>

                <div className=' sm:grid grid-cols-2 gap-5 m-5' >
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Seller Name </span>
                        </label>
                        <input  {...register('sellerName')} required type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input  {...register('phone')} required type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className=' m-5 '>
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea  {...register('about')} required className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                </div>

                <div className=' flex justify-center m-5'>
                    <button className=' btn btn-primary max-w-sm'> ADD Product </button>
                </div>


            </form>
        </div>
    );
};

export default AddProduct;
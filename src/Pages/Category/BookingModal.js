import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    const { productName, resalePrice, picture } = booking;

    const { user } = useContext(AuthContext);

    const productPrice = `$${resalePrice}`


    const handleSubmit = event => {
        event.preventDefault()
        const phone = event.target.phone.value;
        const location = event.target.location.value;
        const bookingProduct = {
            name: user?.displayName,
            email: user?.email,
            productName,
            resalePrice,
            location,
            phone,
            picture,
            quantity: 1,
            date: new Date().toLocaleDateString()


        }
        console.log(bookingProduct);

        fetch('https://78-laptop-resalse-server.vercel.app/booking', {

            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBooking(null)
                    toast.success('booking confirm')

                }
                else {
                    toast.error(data.message)
                }

            })


    }


    return (
        <div>
            <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label onClick={() => setBooking(null)} htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Booking This Item</h3>
                        <form onSubmit={handleSubmit} className=' grid grid-cols-1 gap-3 mt-10'>
                            <span className="label-text">Buyer Name : </span>
                            <input readOnly defaultValue={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full" />
                            <span className="label-text">Buyer Email : </span>
                            <input readOnly defaultValue={user?.email} type="text" placeholder="Type here" className="input input-bordered w-full" />
                            <span className="label-text">Product Name : </span>
                            <input readOnly defaultValue={productName} type="text" placeholder="Type here" className="input input-bordered w-full" />
                            <span className="label-text">Product Price : </span>
                            <input readOnly defaultValue={productPrice} type="text" placeholder="Type here" className="input input-bordered w-full" />

                            <input name='location' required type="text" placeholder="Please Add Your Full Address" className="input input-bordered w-full" />

                            <input name='phone' required type="text" placeholder="Please Add Your phone Number" className="input input-bordered w-full" />
                            <input className=' btn btn-primary w-full' type="submit" value="Booking" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
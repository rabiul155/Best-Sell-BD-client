import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import app from '../../../firebase/firebase.cofig';
import FeedbackCard from './FeedbackCard';

const CustomerFeedback = () => {
    const { user } = useContext(AuthContext)

    const { data: feedback = [], refetch } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/feedback')
            const data = await res.json();
            return data;

        }
    })

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const message = form.feedback.value;
        const experience = form.experience.value;
        const rate = form.rate.value;

        const feedback = {
            photo: user?.photoURL,
            name: user?.displayName,
            message,
            experience,
            rate
        }
        console.log(feedback)

        fetch('http://localhost:5000/feedback', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('feedback added')
                form.reset();
                refetch();
            })
    }
    return (
        <div>
            <h2 className=' text-secondary text-4xl text-center mt-6 font-bold'>Our Customer Feedback</h2>

            {/* show feedback */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    feedback?.map(feed => <FeedbackCard
                        key={feed._id}
                        feed={feed}
                    ></FeedbackCard>)
                }



            </div>
            {/* take user feedback */}
            <div className='mx-6'>
                <form onSubmit={handleSubmit}>
                    <label className="label">
                        <span className="label-text">Add your user Experience</span>
                    </label>
                    <textarea name='feedback' className="textarea textarea-bordered w-full" placeholder="feedback"></textarea>
                    <div className=' grid md:grid-cols-2 gap-5'>
                        <div>
                            <label className="label">
                                <span className="label-text">Your Experience</span>
                            </label>
                            <select name='experience' className="select select-bordered w-full ">
                                <option selected>Good</option>
                                <option>Fair</option>
                                <option>Excelent</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Rate Us</span>
                            </label>
                            <select name='rate' className="select select-bordered w-full ">
                                <option selected>5 star</option>
                                <option>4 star</option>
                                <option>3 star</option>
                                <option>2 star</option>
                                <option>1 star</option>

                            </select>
                        </div>
                    </div>
                    <div className='flex justify-center m-5'>
                        <button className=' btn btn-secondary '>Send Feedback</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CustomerFeedback;
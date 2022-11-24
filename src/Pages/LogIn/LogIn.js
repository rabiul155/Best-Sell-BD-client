import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const LogIn = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = data => {
        console.log(data)
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('log in successfully')

            })
            .catch(error => {
                console.error('log in error', error);
                toast.error(error.message);
            })

    }

    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('log in successfully')
            })
            .catch(err => console.log('google log in error ', err))
    }
    return (

        <div>
            <div className=' h-[800px] flex justify-center'>
                <div className=' w-96 p-7'>
                    <h2 className=' text-3xl font-bold text-secondary text-center'>LogIn</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                {...register("email",
                                    { required: "Email Address is required" })}
                                className="input input-bordered w-full max-w-xs" placeholder="email" />
                            {errors.email && <p className=' text-red-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                {...register("password",
                                    {
                                        required: "Password is required",
                                        minLength: { value: 6, message: " password must be 6 character" },


                                    })}
                                className="input input-bordered w-full max-w-xs" placeholder="**********" />
                            {errors.password && <p className=' text-red-600'>{errors.password?.message}</p>}
                        </div>

                        <div class="flex justify-between items-center mt-3">
                            <div class="form-group form-check">
                                <input
                                    type="checkbox"
                                    className='mr-2 '


                                />
                                <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                >Remember me</label>

                            </div>
                            <a
                                href="#!"
                                class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                            >Forgot password?</a>

                        </div>

                        <input className='btn btn-accent w-full mt-6' value='LogIn' type="submit" />
                    </form>
                    <p className='mt-2'>Don't have an accoutn <Link className=' text-primary underline ' to='/signup'>SignUp</Link></p>
                    <div className="divider">or</div>
                    <button onClick={handleGoogle} className=' btn btn-outline w-full uppercase'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
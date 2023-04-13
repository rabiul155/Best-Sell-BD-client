import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const LogIn = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogIn = data => {
        console.log(data)
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('log in successfully')

                getJWT(user?.email)

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
                toast.success('login with google successfully')
                const role = 'buyer';
                saveUser(user.displayName, user.email, role, user.photoURL);
            })
            .catch(err => console.log('google log in error ', err))
    }


    const saveUser = (name, email, role, picture) => {
        const user = {
            name,
            email,
            role,
            picture

        }
        console.log(user);

        fetch('https://78-laptop-resalse-server.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('user stored in database')
                getJWT(user?.email)

            })
    }


    const getJWT = email => {
        fetch(`https://78-laptop-resalse-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('jwtToken', data.accessToken)

                    navigate(from, { replace: true })
                }
            })
    }





    return (

        <div className='relative'>
            <div className='flex justify-center'>
                <div className='w-96 p-7'>
                    <h2 className=' text-3xl font-bold text-primary text-center'>LogIn</h2>
                    <form onSubmit={handleSubmit(handleLogIn)}>

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

                        <div className="flex justify-between items-center mt-3">
                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    className='mr-2 '


                                />
                                <label className="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                >Remember me</label>

                            </div>
                            <a
                                href="#!"
                                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                            >Forgot password?</a>

                        </div>

                        <input className='btn btn-primary w-full mt-6' value='LogIn' type="submit" />
                    </form>
                    <p className='mt-2'>Don't have an accoutn <Link className=' text-primary underline ' to='/signup'>SignUp</Link></p>
                    <div className="divider">or</div>
                    <button onClick={handleGoogle} className=' btn btn-outline w-full uppercase'>Continue with google</button>
                </div>
            </div>
            <div className='lg:absolute top-10 right-6 mx-10 '>
                <p>Credential Info</p>
                <p>Buyer : </p>
                <p>Email : buyer@gmail.com</p>
                <p>password : 123456</p>
                <p>Seller : </p>
                <p>Email : seller@gmail.com</p>
                <p>password : 123456</p>
                <p>Admin : </p>
                <p>Email : admin@gmail.com</p>
                <p>password : 123456</p>
            </div>
        </div>
    );
};

export default LogIn;
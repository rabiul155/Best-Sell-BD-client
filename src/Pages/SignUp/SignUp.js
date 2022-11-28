import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

    const { createUser, updateUser, googleLogIn } = useContext(AuthContext);
    const imageHostingKey = process.env.REACT_APP_imgbb_api_key;
    const navigate = useNavigate();


    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignUp = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('create user successfully')

                const image = data.photo[0];
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

                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url
                            }

                            updateUser(userInfo)
                                .then(() => {
                                    toast.success('user updated')
                                    saveUser(user.displayName, user.email, data.role, imgData.data.url)
                                })
                                .catch(err => console.log(err))
                        }

                    })


            })
            .catch(error => {
                console.error('create user error ', error)
            })

    }

    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('log in successfully')
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

        fetch('http://localhost:5000/users', {
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
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('jwtToken', data.accessToken)
                    toast.success('get jwt from server')
                    navigate('/')
                }
            })
    }





    return (
        <div>
            <div className=' h-[800px] flex justify-center '>
                <div className=' w-96 p-7'>
                    <h2 className=' text-3xl font-bold text-secondary text-center'>SignUp</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                {...register("name",
                                    { required: "Name is required" })}
                                className="input input-bordered w-full max-w-xs" placeholder="name" />
                            {errors.name && <p className=' text-red-600'>{errors.name?.message}</p>}
                        </div>
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

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select
                                {...register("role")}
                                className="select select-bordered w-full max-w-xs">
                                <option selected>buyer</option>
                                <option>seller</option>
                            </select>
                        </div>

                        <div >
                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">User Image</span>
                                </label>
                                <input type="file"
                                    {...register("photo",
                                        { required: "Photo is required" })}
                                    className="input m-0 p-1 " placeholder="photo" />
                                {errors.photo && <p className=' text-red-600'>{errors.photo?.message}</p>}
                            </div>


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

                        <input className='btn btn-accent w-full mt-6' value='SignUp' type="submit" />
                    </form>
                    <p className=' mt-2'>Already have an account <Link className=' text-primary underline' to='/login'>logIn</Link></p>
                    <div className="divider">or</div>
                    <button onClick={handleGoogle} className=' btn btn-outline w-full uppercase'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
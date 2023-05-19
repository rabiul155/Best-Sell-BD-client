import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { HiMenuAlt1 } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import useRole from '../../hooks/useRole';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [role] = useRole(user?.email)
    console.log(role);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('logOut succefully ')
                window.location.reload();
            })
            .catch(error => {
                console.error('logout error', error)
            })
    }

    let dashbord =
        <>

        </>

    if (user?.email && (role === 'seller' || role === 'admin')) {
        dashbord =
            <>
                <li><Link to='/dashbord'>Dashbord</Link></li>
            </>
    }



    const menuItem =
        <>

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allProducts'>AllProducts</Link></li>
            <li className="dropdown dropdown-hover">
                <div tabIndex={0} className=" font-bold "><Link>Electronics</Link></div>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-black shadow bg-base-100 rounded-box w-52">
                    <li><Link className='w-full' to='/category/laptop'>Laptop</Link></li>
                    <li><Link className='w-full' to='/category/monitor'>Monitor</Link></li>
                    <li><Link className='w-full' to='/category/phone'>Phone</Link></li>
                </ul>
            </li>
            <li className="dropdown dropdown-hover">
                <div tabIndex={0} className=" font-bold "><Link>Vehicle</Link></div>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-black shadow bg-base-100 rounded-box w-52">
                    <li><Link className='w-full' to='/category/car'>Car</Link></li>
                    <li><Link className='w-full' to='/category/bike'>Bike</Link></li>
                    <li><Link className='w-full' to='/category/truck'>Truck</Link></li>

                </ul>
            </li>
            <li><Link to='/cart'>Cart<HiOutlineShoppingCart></HiOutlineShoppingCart></Link></li>
            {

                dashbord

            }

        </>

    return (
        <div className="navbar sticky top-0 z-50  bg-[#060047] lg:text-neutral-content font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <Link className="btn px-0 lg:px-4 btn-ghost normal-case font-bold text-white text-xl">Best Sell BD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <Link onClick={handleLogOut} className="btn bg-[#060047] border-none mx-2">LogOut</Link>
                            {
                                user?.photoURL ? <img className='rounded-full w-8 h-8 mr-5' src={user.photoURL} alt="" />
                                    :
                                    <div> <FaUser className=' rounded-full w-7 h-7 mr-5'></FaUser></div>

                            }
                        </>
                        :
                        <>
                            <Link to='/login' className="btn px-2 bg-[#060047] border-none lg:mx-1">LogIn</Link>
                            <Link to='/signup' className="btn px-2 bg-[#060047] border-none lg:mx-1">SignUp</Link>

                        </>
                }

                <label htmlFor="dashbord-drawer" className="mx-2 text-white drawer-button lg:hidden"><HiMenuAlt1></HiMenuAlt1></label>


            </div>
        </div>
    );
};

export default Navbar;
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { HiMenuAlt1 } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import useRole from '../../hooks/useRole';
import Loading from '../Loading/Loading';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [role, finidigRole] = useRole(user?.email)
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

    let dashbord = <></>

    if (user?.email && (role === 'seller' || role === 'admin')) {
        dashbord =
            <>
                <li><Link to='/dashbord'>Dashbord</Link></li>
            </>
    }



    const menuItem =
        <>

            <li><Link to='/'>Home</Link></li>
            <li className="dropdown dropdown-hover">
                <div tabIndex={0} className=" font-bold "><Link>Categories</Link></div>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-black shadow bg-base-100 rounded-box w-52">
                    <li><Link className='w-full' to='/category/laptop'>Laptop</Link></li>
                    <li><Link className='w-full' to='/category/monitor'>Monitor</Link></li>
                    <li><Link className='w-full' to='/category/phone'>Phone</Link></li>
                </ul>
            </li>
            <li><Link to='/cart'>Cart<HiOutlineShoppingCart></HiOutlineShoppingCart></Link></li>
            {

                dashbord

            }

            {/* <li><Link to='/blog'>Blog</Link></li> */}




        </>

    return (
        <div className="navbar bg-neutral lg:text-neutral-content font-bold">
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
                            <Link onClick={handleLogOut} className="btn mx-2">LogOut</Link>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn px-2  lg:mx-1">LogIn</Link>
                            <Link to='/signup' className="btn px-2 lg:mx-1">SignUp</Link>

                        </>
                }

                <label htmlFor="dashbord-drawer" className="mx-2 text-white drawer-button lg:hidden"><HiMenuAlt1></HiMenuAlt1></label>


            </div>
        </div>
    );
};

export default Navbar;
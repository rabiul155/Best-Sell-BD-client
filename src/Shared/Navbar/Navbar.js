import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('logOut succefully ')
            })
            .catch(error => {
                console.error('logout error', error)
            })
    }

    const menuItem =
        <>

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashbord'>Dashbord</Link></li>
            <li><Link to='/blog'>Blog</Link></li>



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
                <Link className="btn btn-ghost normal-case font-bold text-secondary text-xl">Best Sell BD</Link>
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
                            <Link to='/login' className="btn mx-2">LogIn</Link>
                            <Link to='/signup' className="btn mx-2">SignUp</Link>

                        </>
                }

                <label htmlFor="dashbord-drawer" className="mx-2 text-white drawer-button lg:hidden"><HiMenuAlt1></HiMenuAlt1></label>


            </div>
        </div>
    );
};

export default Navbar;
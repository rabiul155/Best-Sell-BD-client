
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useRole from '../hooks/useRole';
import Loading from '../Shared/Loading/Loading';
import Navbar from '../Shared/Navbar/Navbar';




const Dashbord = () => {
    const { user } = useContext(AuthContext);

    const [role, finidigRole] = useRole(user?.email)
    console.log(role);
    let menuItem

    if (finidigRole) {
        return <Loading></Loading>
    }

    if (role === 'buyer') {
        menuItem = <>
            <li><Link className=' font-bold' to='/dashbord/myOrder'>MyOrder</Link></li>
            <li><Link className=' font-bold' to='/dashbord/myWishlist'>MyWishList </Link></li>
        </>
    }
    else if (role === 'seller') {

        menuItem = <>
            <li><Link className=' font-bold' to='/dashbord/addProduct'>Add Product  </Link></li>
            <li><Link className=' font-bold' to='/dashbord/myProduct'>My Product </Link></li>
        </>
    }

    else if (role === 'admin') {
        menuItem = <>
            <li><Link className=' font-bold' to='/dashbord/myBuyer'>My Buyer  </Link></li>

            <li><Link className=' font-bold' to='/dashbord/mySeller'>My Seller  </Link></li>
        </>
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {
                            menuItem
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;
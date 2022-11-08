import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import titlelogo from '../../../assets/icons/titlelogo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { logOut } = useContext(AuthContext);

    const handleLOgOut = () => {
        logOut()
            .then(() => {
                console.log('logged out!');
            })
            .catch(error => console.error(error))
    };

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/'>My Reviews</Link></li>
        <li className='font-semibold'><Link to='/'>Add Service</Link></li>
        <li className='font-semibold'><Link to='/'>Blog</Link></li>
        <li className='font-semibold'><Link to='/login'>Login</Link></li>
        <button onClick={handleLOgOut} className='btn btn-active btn-ghost'>Logout</button>
        {/* {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className="btn-ghost">Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        } */}
    </>
    return (
        <div className="navbar bg-base-100 px-10 pb-5">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case">
                    <img className='w-52' src={titlelogo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex pt-2">
                {/* main menu  */}
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <button className="btn">Get started</button> */}
            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;
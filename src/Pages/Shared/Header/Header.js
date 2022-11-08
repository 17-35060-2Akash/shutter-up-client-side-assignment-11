import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import titlelogo from '../../../assets/icons/titlelogo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLOgOut = () => {
        logOut()
            .then(() => {
                // console.log('logged out!');
            })
            .catch(error => console.error(error))
    };

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>

        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
                    <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    <button onClick={handleLOgOut} className='btn btn-secondary ml-5'>Logout</button>
                </>
                :
                <>
                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-base-100 px-10 pb-5">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
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
                {
                    user?.email ?

                        <p className='text-xl font-medium'>Hi, <span className='text-blue-600'>{user.displayName}</span></p>
                        :
                        <></>

                }
            </div>

        </div>
    );
};

export default Header;
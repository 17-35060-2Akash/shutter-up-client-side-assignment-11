import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SocialLogin = () => {


    const handleGoogleSignIn = () => {

    }

    return (
        <div className=''>
            <div className='mx-10  '>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full py-2'><FaGoogle className='text-2xl mr-2 text-blue-500'></FaGoogle> Sign In with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
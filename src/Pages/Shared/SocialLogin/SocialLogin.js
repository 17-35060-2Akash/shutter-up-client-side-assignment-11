import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const SocialLogin = () => {
    const { providerLoginGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLoginGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                // navigate('/');


                ///get jwt token
                const currentUser = {
                    email: user.email
                }
                // console.log(currentUser)

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('Shutter-up', data.token);
                        navigate(from, { replace: true })

                    });


            })
            .catch(error => console.error(error));
    };


    return (
        <div className=''>
            <div className='mx-10  '>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full py-2'><FaGoogle className='text-2xl mr-2 text-blue-500'></FaGoogle> Sign In with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
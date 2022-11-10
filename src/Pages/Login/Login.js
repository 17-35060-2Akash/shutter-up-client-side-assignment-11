import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');

    const [fieldValue, setFieldValue] = useState({});
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn, setLoading } = useContext(AuthContext);

    const handleOnSubmit = event => {
        event.preventDefault();
        // console.log(fieldValue.email, fieldValue.password);

        signIn(fieldValue.email, fieldValue.password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                event.target.reset();
                toast.success('Welcome!');
                setError('');


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
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => setLoading(false))

    }

    const handleOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newFieldValue = { ...fieldValue };
        newFieldValue[field] = value;
        setFieldValue(newFieldValue);


    };

    const handlegoogleform = event => {
        event.preventDefault();
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold py-10 text-secondary">Login Here!</h1>
                </div>
                <form onSubmit={handleOnSubmit} className="card  w-full max-w-md shadow-2xl bg-base-100" style={{ width: '28rem', height: '28rem' }}>
                    <div className="card-body mt-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleOnChange} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handleOnChange} type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label pt-4">
                                <a href="/login" className="label-text-alt link link-hover text-secondary font-medium">Forgot password?</a>
                            </label>
                        </div>
                        <div className='text-start text-lg pl-1 pt-2 text-rose-600'>
                            {error}
                        </div>
                        <div className="form-control mt-12">
                            <button type='submit' className="btn btn-secondary">Login</button>
                        </div>
                    </div>
                </form>
                <p className='text-center py-5 font-semibold text-xl'>or</p>

                <form onSubmit={handlegoogleform} className="card  w-full max-w-md shadow-2xl bg-base-100" style={{ width: '', height: '' }}>
                    <div className="card-body my-4">
                        <SocialLogin></SocialLogin>
                    </div>
                </form>

                <div className='py-10'>
                    <p className='text-2xl font-semibold text-end'>new to Shutter Up? <br /><Link className='text-purple-600' to='/register'>
                        Sign Up</Link> Today.</p>
                </div>


            </div>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {
    const [fieldValue, setFieldValue] = useState({});

    const handleOnSubmit = event => {
        event.preventDefault();
        console.log(fieldValue.email, fieldValue.password);

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
                        <div className="form-control mt-20">
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
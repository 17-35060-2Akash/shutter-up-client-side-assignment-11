import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const [fieldValue, setFieldValue] = useState({});


    const handleOnSubmit = event => {
        event.preventDefault();
        console.log(fieldValue.name, fieldValue.photoURL, fieldValue.email, fieldValue.password);



    };

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
                    <h1 className="text-4xl font-bold py-10 text-purple-600">Sign Up</h1>
                </div>
                <form onSubmit={handleOnSubmit} className="card  w-full max-w-md shadow-2xl bg-base-100" style={{ width: '28rem', height: '36rem' }}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name='photoURL' placeholder="photo URL" className="input input-bordered" />
                        </div>
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

                        </div>
                        <div className="form-control mt-20">
                            <button type='submit' className="btn btn-primary">Login</button>
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
                    <p className='text-2xl font-semibold'>Already have an account? <br /><Link className='text-secondary' to='/login'>
                        Login</Link> Here.</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
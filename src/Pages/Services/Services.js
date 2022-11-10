import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from '../Home/ServicesHome/Service';
import cover from '../../assets/covers/img3.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Services = () => {
    useTitle('Services');
    const { setLoading, loading } = useContext(AuthContext);

    const services = useLoaderData();
    // console.log(services);

    if (loading) {
        return < div className='text-center my-52'> <progress className="progress w-56">Loading...</progress></div >
    }
    return (
        <div className='mb-40'>
            <div className=''>
                <div className=''>
                    <img src={cover} alt='' className="w-full  " />
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-bold py-10 my-14">
                    Checkout All The Services</h1>
            </div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

                    {
                        services.map(product => <Service
                            key={product._id}
                            product={product}></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;
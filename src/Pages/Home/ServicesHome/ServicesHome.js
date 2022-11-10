import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';
import '../Home.css';

const ServicesHome = () => {
    const [serviceProducts, setServiceProducts] = useState([]);



    useEffect(() => {
        const limit = 3;
        const url = `http://localhost:5000/services?limit=${limit}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServiceProducts(data);
                // console.log(data);
            });

    }, []);

    return (
        <div className='mb-12'>
            <div>
                <h1 className="popular-title text-5xl font-bold py-10 pb-20 mt-32">
                    Popular Services</h1>
            </div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {
                        serviceProducts.map(product => <Service
                            key={product._id}
                            product={product}></Service>)
                    }
                </div>

            </div>
            <div className='pt-32'>
                <Link to='/services'>
                    <button className="view-all-btn btn btn-lg btn-outline btn-secondary text-2xl px-20">View All</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesHome;
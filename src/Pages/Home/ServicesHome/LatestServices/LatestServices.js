import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service';
import '../../Home.css';

const LatestServices = () => {
    const [latestServices, setLatestServices] = useState([]);

    useEffect(() => {
        const limit = 3;
        const avoid = 6;
        const url = `https://shutter-up-server.vercel.app/latestservices?limit=${limit}&avoid=${avoid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLatestServices(data);
                // console.log(data);
            });

    }, []);

    return (
        <div className='mb-12'>
            <div>
                <h1 className="latest-title text-5xl font-bold py-10 pb-20 mt-32">
                    Latest Services</h1>
            </div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {
                        latestServices.map(product => <Service
                            key={product._id}
                            product={product}></Service>)
                    }
                </div>

            </div>

        </div>
    );
};

export default LatestServices;
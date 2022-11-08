import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaDollarSign } from "react-icons/fa";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, name, img, price, rating, description } = service;
    // console.log(service);

    return (
        <div className=''>
            <section className="hero min-h-screen bg-base-200 service-section">
                <div className="hero-content flex-col lg:flex-col pt-24">
                    <img src={img} className=" rounded-lg shadow-2xl border-8 border-white" alt='' />
                    <div className="card-body font-bold">
                        <h2 className="card-title text-4xl font-bold mx-auto py-10">{name}</h2>
                        <div className='flex flex-row justify-between text-lg my-4 '>
                            <div className='flex flex-row justify-between align-middle text-3xl'>
                                <FaDollarSign className=' text-blue-600 text-4xl'></FaDollarSign>
                                {price}
                            </div>
                            <div className='flex flex-row justify-between align-middle text-3xl'>
                                {rating}
                                <FaStar className='ml-1 text-amber-300 text-4xl'></FaStar>

                            </div>

                        </div>
                        <div className='mt-4'>
                            <p className='text-2xl text-justify font-normal px-5 my-5'>{description}</p>
                        </div>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </section>

            <section className='details-section'>
                <div className="hero min-h-screen ">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServiceDetails;
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar, FaDollarSign } from "react-icons/fa";

const Service = ({ product }) => {
    const { _id, img, name, rating, price, description } = product;
    return (
        <div className="card w-96 glass rounded-md shadow-xl bg-zinc-400   text-white hover:text-black">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body font-bold">
                <h2 className="card-title text-2xl ">{name}</h2>
                <div className='flex flex-row justify-between text-lg mt-2 '>
                    <div className='flex flex-row justify-between align-middle text-2xl'>
                        <FaDollarSign className=' text-blue-600 text-3xl'></FaDollarSign>
                        {price}
                    </div>
                    <div className='flex flex-row justify-between align-middle text-2xl'>
                        {rating}
                        <FaStar className='ml-1 text-amber-300 text-3xl'></FaStar>

                    </div>

                </div>
                <div className='mt-4'>
                    <p>{description.slice(0, 99) + ' ...'}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-ghost  text-2xl" title='View Details'><FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
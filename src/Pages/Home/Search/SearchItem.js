import React from 'react';
import { FaArrowRight, FaDollarSign, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Home.css';

const SearchItem = ({ sr }) => {
    const { _id, img, name, rating, price, description } = sr;
    return (
        <div className="card w-96 shadow-xl image-full bg-zinc-400 text-white hover:text-black search-card" style={{ width: '18rem' }}>
            <figure><img src={img} alt="car!" className='search-card' /></figure>
            <div className="card-body font-bold body-desc">
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
                {<div className='mt-4'>
                    <p>{description.slice(0, 50) + ' ...'}</p>
                </div>}
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-ghost  text-2xl" title='View Details'><FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
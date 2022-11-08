import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Service = ({ product }) => {
    const { _id, img, name } = product;
    return (
        <div className="card w-96 glass rounded-md shadow-xl bg-zinc-400   text-white hover:text-black">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body font-bold">
                <h2 className="card-title text-2xl ">{name}</h2>
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
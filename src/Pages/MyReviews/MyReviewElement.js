import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviewElement = ({ review, handleDelete, idx }) => {
    const { _id, serviceName, reviewDateAndTime, comment } = review;
    const { reviewDate, reviewTime } = reviewDateAndTime;
    // console.log(review);

    return (
        <tr className=''>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 text-lg text-purple-600 font-semibold">
                            {idx + 1}.
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewTime}</div>
                        <div className="text-sm opacity-50">{reviewDate}</div>
                    </div>
                </div>
            </td>
            <td className='text-md font-semibold text-purple-600'>{serviceName}</td>
            <td className=''>
                {comment}
                <br />
            </td>

            <th>
                <Link to={`/update/${_id}`}><button className="btn btn-ghost text-green-500 font-semibold">Update</button></Link>
            </th>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost text-2xl text-rose-600'><FaTrash></FaTrash></button>
                </label>
            </th>

        </tr>
    );
};

export default MyReviewElement;
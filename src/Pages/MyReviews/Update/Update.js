import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Update = () => {
    useTitle('Update Reviews');

    const prevReview = useLoaderData();
    const [review, setReview] = useState(prevReview);
    // console.log(prevReview);
    const { displayName, serviceName, comment, photoURL } = review;

    const navigate = useNavigate();


    const handleUpdateReview = event => {
        event.preventDefault();
        const comment = event.target.comment.value;

        review['comment'] = comment;
        // console.log(review);

        fetch(`http://localhost:5000/update/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(`Your review in ${serviceName} has been updated!`);
                    navigate('/myreviews');
                }
                else {
                    toast.error(`Something went wrong updating your review.`);
                }
            })
    };

    return (
        <div className="py-40 ">
            <form onSubmit={handleUpdateReview} className='bg-base-300 py-10 w-9/12 mx-auto rounded-lg flex flex-row justify-start align-middle' >

                <div className='flex flex-col justify-center align-middle flex-grow px-10'>
                    <div className='flex justify-start align-middle ml-1 mb-1'>
                        <img className="mask mask-circle w-12 mr-4 mb-3" src={photoURL} alt='' />
                        <h1 className='text-start text-xl pb-4 font-semibold mt-2 text-blue-600'>{displayName}</h1>
                    </div>
                    <input type="text" name="comment" id="" placeholder='add your review' defaultValue={comment} className='h-12 px-5 ' />
                    <div className='flex justify-end'>
                        <button className='btn  px-10 py-2 mt-4'>Update</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Update;
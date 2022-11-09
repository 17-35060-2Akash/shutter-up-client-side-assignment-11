import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaDollarSign, FaUser } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import Review from './Review';

const ServiceDetails = () => {
    const service = useLoaderData();

    const { _id, name, img, price, rating, description } = service;

    const { user } = useContext(AuthContext);
    // console.log(user);

    //autoLoading reviews
    const [reviews, setReviews] = useState([]);
    // const [serciveReviews, setServiceReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
    }, [reviews]);


    const handlePostingReview = event => {
        event.preventDefault();
        const comment = event.target.comment.value;

        //getting date and time
        const date = new Date();
        const reviewTime = date.toLocaleTimeString();
        const reviewDate = date.toLocaleDateString();
        // console.log(reviewTime, reviewDate);


        const review = {
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            comment: comment,
            reviewDateAndTime: {
                reviewTime,
                reviewDate
            },
            serviceId: service._id
        };

        // console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Your review has been added!');
                    event.target.reset();
                }
                else {
                    toast.error('Something went wrong adding your review!');
                }
            })
    };

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

            <section className='details-section mx-auto'>
                <div className="">
                    <div className="pt-10 pb-40 ">
                        <h1 className="text-5xl font-bold py-10 pb-20">Reviews</h1>

                        <div className="previous-reviews grid grid-cols-1 gap-8 mb-20">
                            {/* ///// loading prev reviews//////  */}
                            {
                                reviews.map(review => <Review
                                    key={review._id}
                                    review={review}></Review>)
                            }
                        </div>

                        <h1 className="text-3xl font-bold py-10 pb-20">Add Your Reviews</h1>



                        {
                            user?.email ?
                                <>
                                    <div className="add-a-review ">
                                        <form onSubmit={handlePostingReview} className='bg-base-300 py-10 w-9/12 mx-auto rounded-lg flex flex-row justify-start align-middle' >

                                            <div className='flex flex-col justify-center align-middle flex-grow px-10'>
                                                <div className='flex justify-start align-middle ml-1 mb-1'>
                                                    {
                                                        user?.photoURL ?
                                                            <img className="mask mask-circle w-12 mr-4 mb-3" src={user?.photoURL} alt='' />
                                                            :
                                                            <FaUser className='text-5xl mr-4 mb-3 mask mask-circle bg-white p-2'></FaUser>
                                                    }



                                                    {
                                                        user?.displayName ?
                                                            <h1 className='text-start text-xl pb-4 font-semibold mt-2 text-blue-600'>{user?.displayName}</h1>
                                                            :
                                                            <h1 className='text-start text-xl pb-4 font-semibold mt-2 text-blue-600'>Shutterup User</h1>

                                                    }


                                                </div>
                                                <input type="text" name="comment" id="" placeholder='add your review' className='h-12 px-5 ' />
                                                <div className='flex justify-end'>
                                                    <button className='btn  px-10 py-2 mt-4'>Post</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='text-lg text-start bg-base-300 w-1/2  rounded-xl px-6 py-10 mb-6 mx-auto'>
                                        <p className='text-center text-3xl font-medium'>Please <Link to='/login'>
                                            <button className='btn text-2xl mx-2'>Login</button>
                                        </Link> to add a review</p>
                                    </div>
                                </>
                        }
                    </div>
                </div>

            </section >

        </div >
    );
};

export default ServiceDetails;
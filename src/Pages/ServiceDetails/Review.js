import React from 'react';

const Review = ({ review }) => {
    // console.log(review);
    const { displayName, email, comment, photoURL, reviewDateAndTime, service } = review;
    const { reviewDate, reviewTime } = reviewDateAndTime;
    return (
        <div>
            <div className='bg-base-200 py-10 w-9/12 mx-auto rounded-lg flex flex-row justify-start align-middle' >

                <div className='flex flex-col justify-center align-middle flex-grow px-10 py-5 mx-5 rounded-xl bg-white'>
                    <div className='flex flex-row justify-between align-middle'>
                        <div className='flex justify-start align-middle ml-1 mb-1'>
                            <img className="mask mask-circle w-12 mr-4 mb-3" src={photoURL} alt='' />
                            <h1 className='text-start text-xl pb-4 font-semibold mt-2 text-blue-600'>{displayName}</h1>
                        </div>
                        <div className='flex justify-start align-middle ml-1 mb-1'>
                            <div className='text-end text-xs text-gray-400 font-medium'>
                                <p className=''>{reviewTime}</p>
                                <p>{reviewDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-lg text-start bg-fuchsia-100  rounded-xl px-6 py-4 mb-6'>
                        <p>{comment}</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Review;
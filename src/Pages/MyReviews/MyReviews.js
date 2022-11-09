import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewElement from './MyReviewElement';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/reviews?email=${user?.email}`;
        // console.log(url);
        fetch(url)
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setMyReviews(data);
            })
    }, [user?.email, logOut, myReviews]);


    const handleDelete = id => {
        Swal.fire({
            title: 'Are You sure to delete your review?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/reviews/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            // Swal.fire('Saved!', '', 'success')
                            toast.success('Deleted Successfully!');
                            const remaining = myReviews.filter(rev => rev._id !== id);
                            setMyReviews(remaining);
                        }
                    })

            } else if (result.isDenied) {
                // Swal.fire('Changes are not saved', '', 'info')
            }
        });

        /*  const agreed = window.confirm(`Are You sure to delete your review?`)
         if (agreed) {
             fetch(`http://localhost:5000/reviews/${id}`, {
                 method: 'DELETE'
             })
                 .then(res => res.json())
                 .then(data => {
                     console.log(data);
                     if (data.deletedCount > 0) {
                         toast.success('Deleted Successfully!');
                         const remaining = myReviews.filter(rev => rev._id !== id);
                         setMyReviews(remaining);
                     }
                 })
         } */
    };




    return (
        <div className='pb-40'>
            <h1 className='text-4xl font-bold py-16 pt-20'>You have {myReviews.length} review comments</h1>

            {
                myReviews.length > 0 ?
                    <>
                        <div className="overflow-x-auto w-full py-10">

                            <table className="table w-full  border-b-8 border-l-8 border-r-8">
                                <thead>
                                    <tr className=''>
                                        <th>
                                            <label>
                                                {/* <input type="checkbox" className="checkbox" /> */}
                                            </label>
                                        </th>
                                        <th className=''>Service Name</th>
                                        <th className='text-center'>Reviews</th>
                                        <th className='text-end'>Actions</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myReviews.map((review, idx) => <MyReviewElement
                                            key={review._id}
                                            review={review}
                                            idx={idx}
                                            handleDelete={handleDelete}></MyReviewElement>)
                                    }

                                </tbody>

                            </table>
                        </div>
                    </>
                    :
                    <>
                        <div className='text-lg text-start bg-base-300 w-1/2  rounded-xl px-6 py-10 mb-6 mx-auto'>
                            <p className='text-center text-3xl font-medium'>No reviews were added</p>
                        </div>
                    </>
            }

        </div>
    );
};

export default MyReviews;
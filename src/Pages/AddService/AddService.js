import React, { useState } from 'react';
import cover from '../../assets/covers/camera-cover.jpg';

const AddService = () => {
    const [fieldValue, setFieldValue] = useState({});

    const handleAddService = event => {
        event.preventDefault();
        console.log(fieldValue);

    };

    const handleOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newFieldValue = { ...fieldValue };
        newFieldValue[field] = value;
        setFieldValue(newFieldValue);


    };

    return (
        <div>
            <div className=''>
                <div className=''>
                    <img src={cover} alt='' className="w-full  " />
                </div>
            </div>

            <div className="py-10 my-20 text-center ">
                <h1 className='text-4xl font-bold '>Add a Service Here</h1>
                {/* <p className='text-3xl font-semibold py-5 text-orange-600'></p> */}
            </div>

            <form onSubmit={handleAddService} className='p-24 bg-slate-100 mt-14 mb-36 w-9/12 mx-auto '>
                <div className='mb-5'>
                    <input onChange={handleOnChange} type="text" name='name' placeholder="Service Name" className="input input-ghost w-full bg-white h-14 text-md px-10" required />
                </div>
                <div className='mb-5'>
                    <input onChange={handleOnChange} type="text" name='img' placeholder="Image URL" className="input input-ghost w-full bg-white h-14 text-md px-10" required />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input onChange={handleOnChange} type="text" name='price' placeholder="charge/day" title='only add the amount' className="input input-ghost w-full bg-white h-14 text-md px-10" required />
                    <input onChange={handleOnChange} type="text" name='rating' placeholder="Rating" title='only add the rating' defaultValue={''} className="input input-ghost w-full bg-white h-14 text-md px-10" />
                </div>
                <textarea name='description' className="textarea  h-36 w-full py-5 my-5 bg-white text-md px-10" placeholder="Description" title='not more than 300 words' required></textarea>
                <input onChange={handleOnChange} className='btn bg-green-500 border-0 w-full h-14 text-md' type='submit' value='Place Your Order' />
            </form>

        </div>
    );
};

export default AddService;
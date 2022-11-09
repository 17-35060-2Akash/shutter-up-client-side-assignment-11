import React, { useState } from 'react';
import toast from 'react-hot-toast';
import cover from '../../assets/covers/camera-cover.jpg';

const AddService = () => {
    const [service, setService] = useState({});

    const handleAddService = event => {
        event.preventDefault();
        // console.log(service);

        if (service.description.length > 300) {
            return toast.error("Description can't be more than 300 words!");
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Cheers! Service Added Successfully.');
                    event.target.reset();
                }
                else {
                    toast.error('Something went wrong adding your service!');
                }
            })

    };

    const handleOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newFieldValue = { ...service };
        newFieldValue[field] = value;
        setService(newFieldValue);


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
                <textarea onChange={handleOnChange} name='description' className="textarea  h-36 w-full py-5 my-5 bg-white text-md px-10" placeholder="Description" title='not more than 300 words' required></textarea>
                <input className='btn bg-green-500 border-0 w-full h-14 text-md' type='submit' value='Add Your Service' />
            </form>

        </div>
    );
};

export default AddService;
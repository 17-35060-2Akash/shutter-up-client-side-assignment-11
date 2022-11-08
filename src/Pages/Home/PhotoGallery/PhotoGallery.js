import React from 'react';
import img1 from '../../../assets/photogalary/11.jpg'
import img2 from '../../../assets/photogalary/12.jpg'
import img3 from '../../../assets/photogalary/13.jpg'
import img4 from '../../../assets/photogalary/14.jpg'
import img5 from '../../../assets/photogalary/15.jpg'
import img6 from '../../../assets/photogalary/16.jpg'
import img7 from '../../../assets/photogalary/17.jpg'
import img8 from '../../../assets/photogalary/18.jpg'
import img9 from '../../../assets/photogalary/19.jpg'
import './PhotoGallery.css';


const PhotoGallery = () => {
    return (
        <div className="hero min-h-screen bg-base-100 py-20 pb-36">
            <div className="hero-content flex-col lg:flex-col-reverse">
                <div className="hero-content grid lg:grid-cols-3 grid-cols-2 gap-10">
                    <img src={img9} className="max-w-sm shadow-2xl border-8 border-white options-div" alt='' />

                    <div className='grid grid-cols-2 gap-10'>
                        <img src={img4} className="max-w-sm shadow-2xl w-44 border-8 border-white options-div" alt='' />
                        <img src={img6} className="max-w-sm shadow-2xl w-44 border-8 border-white options-div" alt='' />
                        <img src={img5} className="max-w-sm shadow-2xl w-44 border-8 border-white options-div" alt='' />
                        <img src={img8} className="max-w-sm shadow-2xl w-44 border-8 border-white options-div" alt='' />
                    </div>
                    <div className='grid grid-cols-2 gap-10'>
                        <img src={img2} className="max-w-sm shadow-2xl w-44 border-8 border-white options-div" alt='' />
                        <img src={img1} className="max-w-sm shadow-2xl w-44 border-8 border-white options-div" alt='' />
                        <img src={img3} className="max-w-sm shadow-2xl w-44 border-8 border-white options-div" alt='' />
                        <img src={img7} className="max-w-sm shadow-2xl w-44 border-8 border-white options-div" alt='' />
                    </div>
                </div>
                <div className='py-10 '>
                    <h1 className="text-5xl font-bold py-10 ">
                        Our Fresh Works</h1>
                    <p className="py-6 text-xl px-12 ">Hire us for an amazing experience in no time
                        Choose a event and just call us. we’ll take care of the rest. Shutter Up is a platform
                        to cherish your imagination into the canvas and capture your memories with
                        an artictic way.</p>

                </div>
            </div>

        </div>
    );
};

export default PhotoGallery;
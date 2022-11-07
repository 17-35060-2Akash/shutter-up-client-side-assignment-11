import React from 'react';


const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">

            <div className='carousel-img'>
                <img src={image} alt='' className="w-full " />
            </div>

            <div className="absolute flex flex-col justify-end transform -translate-y-1/2 right-24  top-1/2">
                <h1 className='text-6xl font-bold text-white text-end'>We
                    <br /><span className='text-blue-600'>Shoot</span> <br /> Your  <br />
                    Every Memory</h1>
            </div>
            <div className="absolute flex flex-col justify-end transform -translate-y-1/2 right-24  top-3/4">
                <p className='text-white font-medium text-2xl pt-2 text-end'>Give moments a fine texture <br /> with <span className='text-blue-600'> SHUTTER UP!</span></p>
            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-14 bottom-6">
                <a href={`#slide${prev}`} className="btn btn-circle mr-6 text-xl">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle text-xl">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;
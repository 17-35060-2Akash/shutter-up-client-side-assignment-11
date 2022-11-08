import React from 'react';
import Carousel from './Carousel/Carousel';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Search from './Search/Search';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Search></Search>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;
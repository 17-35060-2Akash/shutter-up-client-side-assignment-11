import React from 'react';
import Carousel from './Carousel/Carousel';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Search from './Search/Search';
import ServicesHome from './ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Search></Search>
            <ServicesHome></ServicesHome>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;
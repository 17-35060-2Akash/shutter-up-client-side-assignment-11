import React from 'react';
import useTitle from '../../hooks/useTitle';
import Carousel from './Carousel/Carousel';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Search from './Search/Search';
import ServicesHome from './ServicesHome/ServicesHome';

const Home = () => {
    useTitle('Home');

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
import React from 'react';
import useTitle from '../../hooks/useTitle';
import Carousel from './Carousel/Carousel';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Search from './Search/Search';
import LatestServices from './ServicesHome/LatestServices/LatestServices';
import ServicesHome from './ServicesHome/ServicesHome';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Carousel></Carousel>
            <Search></Search>
            <ServicesHome></ServicesHome>
            <LatestServices></LatestServices>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;
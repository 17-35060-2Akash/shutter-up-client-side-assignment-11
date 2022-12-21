import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Carousel from './Carousel/Carousel';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Search from './Search/Search';
import LatestServices from './ServicesHome/LatestServices/LatestServices';
import ServicesHome from './ServicesHome/ServicesHome';

const Home = () => {
    useTitle('Home');
    const { loading } = useContext(AuthContext);

    if (loading) {
        return < div className='text-center my-52'> <progress className="progress w-56">Loading...</progress></div >
    }

    return (
        <div>
            <Carousel></Carousel>
            <Search></Search>
            <PhotoGallery></PhotoGallery>

            <ServicesHome></ServicesHome>
            <LatestServices></LatestServices>
        </div>
    );
};

export default Home;
import React from 'react';
import Slider from '../Home/Slider/Slider'
import Footer from '../Shared/Footer/Footer';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
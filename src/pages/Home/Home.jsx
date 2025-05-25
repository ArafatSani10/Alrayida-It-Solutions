import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Brands from '../../Components/Brands/Brands';
import OurService from '../../Components/OurService/OurService';
import WhyAlrayida from '../../Components/WhyAlrayida/WhyAlrayida';
import AgencyDriving from '../../Components/AgencyDriving/AgencyDriving';
import Technology from '../../Components/Technology/Technology';
import Ourwork from '../../Components/OurWorks/Ourwork';

import ClientTestimonials from '../../Components/ClientTestimonials/ClientTestimonials';
import AnimatedCursor from '../../components/AnimatedCursor';
import DevFAQ from '../Services/DevFAQ/DevFAQ';

const Home = () => {
    return (
        <div>
            <AnimatedCursor></AnimatedCursor>
            <Banner></Banner>
            <Brands></Brands>
            <OurService></OurService>
            <WhyAlrayida></WhyAlrayida>
            <AgencyDriving></AgencyDriving>
            <Technology></Technology>
            <Ourwork></Ourwork>
            <ClientTestimonials></ClientTestimonials>
            <DevFAQ></DevFAQ>
     
        </div>
    );
};

export default Home;
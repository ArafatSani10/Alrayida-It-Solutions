import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Brands from '../../Components/Brands/Brands';
import OurService from '../../Components/OurService/OurService';
import WhyAlrayida from '../../Components/WhyAlrayida/WhyAlrayida';
import AgencyDriving from '../../Components/AgencyDriving/AgencyDriving';
import Technology from '../../Components/Technology/Technology';
import Ourwork from '../../Components/OurWorks/Ourwork';
import FAQSection from '../../Components/FAQSection/FAQSection';
import ClientTestimonials from '../../Components/ClientTestimonials/ClientTestimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <OurService></OurService>
            <WhyAlrayida></WhyAlrayida>
            <AgencyDriving></AgencyDriving>
            <Technology></Technology>
            <Ourwork></Ourwork>
            <FAQSection></FAQSection>
            <ClientTestimonials></ClientTestimonials>

            
            

        </div>
    );
};

export default Home;
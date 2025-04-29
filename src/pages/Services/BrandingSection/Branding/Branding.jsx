import React from 'react';
import BrandingBanner from '../BrandingBanner/BrandingBanner';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';
import BrandingSection from '../BrandingSection/BrandingSection';

const Branding = () => {
    return (
        <div>
            {/* start here */}
            <BrandingBanner></BrandingBanner>

            <BrandingSection></BrandingSection>

            {/*  */}
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Branding;
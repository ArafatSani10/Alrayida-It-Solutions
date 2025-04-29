import React from 'react';
import VideoProductBanner from '../VideoProductBanner/VideoProductBanner';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';
import VideoSubBanner from '../VideoSubBanner/VideoSubBanner';
import ProductionSection from '../ProductionSection/ProductionSection';

const VideoProductions = () => {
    return (
        <div>
            <VideoProductBanner></VideoProductBanner>
            <VideoSubBanner></VideoSubBanner>
            <ProductionSection></ProductionSection>

            {/*  */}
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default VideoProductions;
import React from 'react';
import VideoProductBanner from '../VideoProductBanner/VideoProductBanner';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';
import VideoSubBanner from '../VideoSubBanner/VideoSubBanner';

const VideoProductions = () => {
    return (
        <div>
            <VideoProductBanner></VideoProductBanner>
            <VideoSubBanner></VideoSubBanner>

            {/*  */}
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default VideoProductions;
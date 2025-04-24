import React from 'react';
import UiuxBanner from './UxBanner/UiuxBanner';
import Video from './UxVideo/Video';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';

const Figma = () => {
    return (
        <div>
            <UiuxBanner></UiuxBanner>
            <Video></Video>
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Figma;
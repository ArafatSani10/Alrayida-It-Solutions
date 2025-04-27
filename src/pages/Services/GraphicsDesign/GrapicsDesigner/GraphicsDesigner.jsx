import React from 'react';
import GraphicsBanner from '../GraphicsBanner/GraphicsBanner';
import GraphicsVideo from '../GraphicsVideo/GraphicsVideo';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';
import GraphicsInterface from '../GraphicsInterface/GraphicsInterface';
import BrandDesign from '../BrandDesign/BrandDesign';

const GraphicsDesigner = () => {
    return (
        <div>
            <GraphicsBanner></GraphicsBanner>
            <GraphicsVideo></GraphicsVideo>
            <GraphicsInterface></GraphicsInterface>
            <BrandDesign></BrandDesign>

            <DevFAQ></DevFAQ>

            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default GraphicsDesigner;
import React from 'react';
import CrmBanner from '../CrmBanner/CrmBanner';
import CrmWork from '../CrmWork/CrmWork';
import CrmShowcase from '../CrmShowcase/CrmShowcase';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';

const CrmandSaas = () => {
    return (
        <div>
            <CrmBanner></CrmBanner>
            <CrmWork></CrmWork>
            <CrmShowcase></CrmShowcase>
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default CrmandSaas;
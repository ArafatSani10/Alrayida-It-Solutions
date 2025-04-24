import React from 'react';

import WebBanner from './WebBanner/WebBanner';
import WithWork from '../WithWork/WithWork';
import ShowCaseProject from '../ShowCaseProject/ShowCaseProject';
import DevFAQ from '../DevFAQ/DevFAQ';
import GetTouch from '../../About/GetTouch/GetTouch';
import Experiences from '../Experiences/Experiences';

const WebDevelopment = () => {
  return (
    <div>
     <WebBanner></WebBanner>
     <WithWork></WithWork>
     <ShowCaseProject></ShowCaseProject>
     <DevFAQ></DevFAQ>
     <Experiences></Experiences>
     <GetTouch></GetTouch>
    </div>
  );
};

export default WebDevelopment;

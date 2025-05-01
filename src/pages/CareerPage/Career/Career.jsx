import React from 'react';
import CareerBanner from '../CareerBanner/CareerBanner';
import DevFAQ from '../../Services/DevFAQ/DevFAQ';
import Experiences from '../../Services/Experiences/Experiences';
import GetTouch from '../../About/GetTouch/GetTouch';
import CareerMoments from '../CareerMoments/CareerMoments';
import CarrerInterface from '../CarrerInterface/CarrerInterface';
import CurrentOpening from '../CurrentOpenning/CurrentOpening';
import AlraayidaMemorable from '../AlraayidaMemoriable/AlraayidaMemorable';
import TeamAbility from '../TeamAbility/TeamAbility';

const Career = () => {
    return (
        <div>
            <CareerBanner></CareerBanner>
            <CareerMoments></CareerMoments>
            <CurrentOpening></CurrentOpening>
            <CarrerInterface></CarrerInterface>
            <AlraayidaMemorable></AlraayidaMemorable>
            <TeamAbility></TeamAbility>
            {/*  */}
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Career;
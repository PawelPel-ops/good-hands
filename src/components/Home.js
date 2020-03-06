import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import WhatIsGoingOn from "./WhatIsGoingOn";
import AboutUs from "./AboutUs";
import Foundation from "./Foundation";
import Contact from "./Contact";


const Home = () => {
    return (
        <div>
            <HomeHeader title="Start" dark={true} id="start"/>
            <HomeThreeColumns />
            <WhatIsGoingOn title="whatIsGoingOn" dark={true} id="whatIsGoingOn"/>
                <AboutUs title="Start" dark={true} id="start"/>
                <Foundation title="Start" dark={true} id="start"/>
                <Contact title="Start" dark={true} id="start"/>


        </div>
    );
};

export default Home;
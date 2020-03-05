import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import Start from "./Start";
import WhatIsGoingOn from "./WhatIsGoingOn";
import AboutUs from "./AboutUs";
import Foundation from "./Foundation";
import Contact from "./Contact";


const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <HomeHeader />
                <Start title="Start" dark={true} id="start"/>
                <WhatIsGoingOn title="Start" dark={true} id="start"/>
                <AboutUs title="Start" dark={true} id="start"/>
                <Foundation title="Start" dark={true} id="start"/>
                <Contact title="Start" dark={true} id="start"/>
            <HomeThreeColumns/>

        </div>
    );
};

export default Home;
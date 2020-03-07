import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";
import Decoration from "../assets/Decoration.svg";

const WhatIsGoingOn = () => {
    return (
        <div className="whatIsGoingOn">
           <h2 id="whatIsGoingOn" className="whatIsGoingOn_header">Wystarczą 4 proste kroki</h2>
           <img src={Decoration} alt="decoration"/>
           <div className="whatIsGoingOn_container container">
               <div className="whatIsGoingOn_element">
                   <img src={Icon1} alt="icon1"/>
                   <span>Wybierz rzeczy</span>
                   <hr />
                   <p>ubrania, zabawki, sprzęt i inne</p>
               </div>
               <div className="whatIsGoingOn_element">
                   <img src={Icon2} alt="icon2"/>
                   <span>Spakuj je</span>
                   <hr />
                   <p>skorzystaj z worków na śmieci</p>
               </div>
               <div className="whatIsGoingOn_element">
                   <img src={Icon3} alt="icon3"/>
                   <span>Zdecyduj komu chcesz pomóc</span>
                   <hr />
                   <p>Wybierz zaufane miejsce</p>
               </div>
               <div className="whatIsGoingOn_element">
                   <img src={Icon4} alt="icon4"/>
                   <span>Zamów kuriera</span>
                   <hr />
                   <p>kurier przyjedzie w dogodnym terminie</p>
               </div>
           </div>
           <div className="whatIsGoingOn_button">
               <div><Link to="/login">Oddaj<br /> rzeczy</Link></div>
           </div>
           <Switch>
               <Route path="/login" component={Login} />
           </Switch>
        </div>
    );
};

export default WhatIsGoingOn;
import React from 'react';
import {Link} from "react-scroll";
import {Link as Link2, Route, Switch} from "react-router-dom";
import Login from "./Login";

const HomeHeader = () => {
    return (
        <div>
           <h1>Header</h1>

            <ul>
                <li><Link
                    activeClass="active"
                    to="start"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}>Start</Link></li>
                <li><Link
                    activeClass="active"
                    to="whatIsGoingOn"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}>O co chodzi?</Link></li>
                <li><Link
                    activeClass="active"
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}>O nas</Link></li>
                <li><Link
                    activeClass="active"
                    to="foundation"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}>Fundacja i organizacje</Link></li>
                <li><Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}>Kontakt</Link></li>
            </ul>
            <h2>Zacznij pomagać!</h2>
            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>

            <Link2 to="/login">Oddaj rzeczy</Link2>
            <Link2 to="/login">Zorganizuj zbiórkę</Link2>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
};

export default HomeHeader;
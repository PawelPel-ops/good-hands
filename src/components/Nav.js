import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

const Nav = () => {
    return (
        <div className="nav">
            <nav>
                <ul className="login_nav">
                    <li><Link to="/login">
                        Zaloguj
                    </Link></li>
                    <li><Link to="/registration">
                        Załóż konto
                    </Link></li>
                </ul>
                <ul className="scroll_nav">

                        <li><LinkScroll
                            activeClass="active"
                            to="start"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}>Start</LinkScroll></li>
                        <li><LinkScroll
                            activeClass="active"
                            to="whatIsGoingOn"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}>O co chodzi?</LinkScroll></li>
                        <li><LinkScroll
                            activeClass="active"
                            to="aboutUs"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}>O nas</LinkScroll></li>
                        <li><LinkScroll
                            activeClass="active"
                            to="foundation"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}>Fundacja i organizacje</LinkScroll></li>
                        <li><LinkScroll
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}>Kontakt</LinkScroll></li>
                    </ul>

            </nav>
        </div>
    );
};

export default Nav;
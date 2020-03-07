import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Login from "./Login";
// import Logo from "../assets/Home-Hero-Image.jpg";
import Decoration from "../assets/Decoration.svg";

const HomeHeader = () => {
    return (
        <div className="home_header container" id="start">
            <div className="home_header_image">
                {/*<img src={Logo} alt="Home-Hero-Image"/>*/}
            </div>
            <div className="home_header_title">
                <h2>Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={Decoration} />
                <div className="home_header_buttons">
                    <div>
                        <Link to="/login">Oddaj<br /> rzeczy</Link>
                    </div>
                    <div>
                        <Link to="/login">Zorganizuj zbiórkę</Link>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
};

export default HomeHeader;
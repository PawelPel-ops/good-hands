import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Login from "./Login";

const HomeHeader = () => {
    return (
        <div className="home_header" id="start">
            {/*<div style={{width:"1200px", height:"1200px"}}></div>*/}
            <div className="home_header_title">
                <h2>Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h2>
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
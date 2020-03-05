import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Login from "./Login";

const HomeHeader = () => {
    return (
        <div>
           <h1>Header</h1>


            <h2>Zacznij pomagać!</h2>
            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>

            <Link to="/login">Oddaj rzeczy</Link>
            <Link to="/login">Zorganizuj zbiórkę</Link>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
};

export default HomeHeader;
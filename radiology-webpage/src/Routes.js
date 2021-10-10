import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import AllCases from "./AllCases";


export default class Routes extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} />
                </Switch>
            
        )
    }
}
import { Router } from "@reach/router";
import Dashboard from "../../components/Dashboard"
import WeatherList from "../../components/WeatherList"

import React from 'react';

const Routes = () => {
    return (
        <Router>
            <Dashboard path="/"/>
            <WeatherList path="/WeatherList"/>
        </Router>
    )
}
export default Routes;
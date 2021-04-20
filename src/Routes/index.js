import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;
import HomePage from '../Pages/HomePage';
import MeditionsPage from '../Pages/MeditionsPage';

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={ HomePage } strict />
                </Switch>
                <Switch>
                    <Route exact path="/medition" component={ MeditionsPage } />
                </Switch>
            </Router>
        </>
    )
}

export default Routes

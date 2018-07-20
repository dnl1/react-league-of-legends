import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ChampionsPage from './pages/champions'
import HomePage from './pages/home'
import RouteHelper from "./helpers/routeHelper";

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path={RouteHelper.resolvePath('/')} component={HomePage} />
            <Route exact={true} path={RouteHelper.resolvePath('/champions')} component={ChampionsPage} />
        </Switch>
    );
}

export default Routes
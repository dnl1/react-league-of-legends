import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ChampionsPage from './pages/champions'
import ChampionsDetail from './pages/champions/detail'
import HomePage from './pages/home'
import RouteHelper from "./helpers/routeHelper";

const Routes = () => {
    return (
        <div>
            <Route exact={true} path={RouteHelper.resolvePath('/')} component={HomePage} />
            <Route path={RouteHelper.resolvePath('/champions')} component={ChampionsPage} />
            <Route path={RouteHelper.resolvePath('/champions/:name')} component={ChampionsDetail} />
        </div>
    );
}

export default Routes
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ChampionsPage from './pages/champions'
import HomePage from './pages/home'

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/champions" component={ChampionsPage} />
        </Switch>
    );
}

export default Routes
import React, { Component } from 'react';
import RouteHelper from "../../helpers/routeHelper";

class NavBar extends Component {
    render() {
        return (
            <nav>
                <a href={RouteHelper.resolvePath('/champions')}>Champions</a>
            </nav>
        );
    }
}

export default NavBar;
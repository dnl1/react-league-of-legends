import React, { Component } from 'react';
import RouteHelper from "../../helpers/routeHelper";
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to={RouteHelper.resolvePath('/champions')}>Champions</Link>
            </nav>
        );
    }
}

export default NavBar;
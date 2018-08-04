import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from '../logo.svg';
import '../scss/app.scss';
import NavBar from "./pages/navbar";
import { Link } from 'react-router-dom'
import RouteHelper from "./helpers/routeHelper";
import Routes from './routes';
const supportsHistory = "pushState" in window.history

class App extends Component {
    componentDidMount() {
    }
    
    render() {
        return (
            <Router forceRefresh={!supportsHistory}>
                <main className="application">
                    <div className="App">
                        <header className="App-header">
                            <Link to={RouteHelper.resolvePath('/')}>
                                <img src={logo} className="App-logo" alt="logo" />
                            </Link>
                            <h1 className="App-title">React of Legends</h1>
                            <NavBar />
                        </header>
                        <Routes />
                    </div>
                </main>
            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';
import logo from '../logo.svg';
import '../scss/app.scss';
import NavBar from "./pages/navbar";
import RouteHelper from "./helpers/routeHelper";
const supportsHistory = "pushState" in window.history

class App extends Component {
    render() {
        window.localStorage.clear();
        return (
            <Router forceRefresh={!supportsHistory}>
                <main className="application">
                    <div className="App">
                        <header className="App-header">
                            <a href={RouteHelper.resolvePath('/')}>
                                <img src={logo} className="App-logo" alt="logo" />
                            </a>
                            <h1 className="App-title">React of Legends</h1>
                            <NavBar />
                        </header>
                    </div>
                    <Routes />
                </main>
            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';
import logo from '../logo.svg';
import '../scss/app.scss';
import NavBar from "./pages/navbar";
const supportsHistory = "pushState" in window.history

class App extends Component {
    render() {
        return (
            <Router forceRefresh={!supportsHistory}>
                <main className="application">
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to <br />React League of Legends</h1>
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

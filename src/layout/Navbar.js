import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">

                    <a href="/" className="navbar-brand">TRLOGIC</a>

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                    </ul>
            </nav>
        );
    }
}
import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class ActivityNavbar extends Component {
    render() {
        return (
            <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">

                    <a href="/" className="navbar-brand">TRLOGIC</a>

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Çıkış</Link>
                        </li>
                    </ul>
            </nav>
        );
    }
}
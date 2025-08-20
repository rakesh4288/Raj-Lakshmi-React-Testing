import React from "react";
import logo from './logo.svg';
import { Link } from "react-router-dom";

const SiteHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/home">
                    <img src={logo} className="App-logo" alt="logo"  />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="how-to-test-images">Image Test Cases</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                RTL Query
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="rtl-multiple-element">
                                        Multiple Elements and Custom Role
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="rtl-getAllByRole">getAllByRole</Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/rtl-getByRoleQuery">getByRoleQuery</Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/rtl-getByLabelText">getByLabelText</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="how-to-test-function-testing">Function Testing</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Form Element
                            </Link>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="how-to-test-input-element">Input Element</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default SiteHeader;
/* Header as a component */
/*
REACT Portfolio Assignment
Hamidreza Naji
S#: 200503068
Course: Advance Client-side JavaScript - COMP2112
*/

import React from 'react';
import {NavLink} from 'react-router-dom';

function Header()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <NavLink to={"/home"} className="navbar-brand"><img width="130px" src="../img/logo.png" alt="Logo Image"/></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-5">
                    <NavLink to={"/home"} className="nav-link" id="Home" aria-current="page">Home Page</NavLink>
                </li>
                <li className="nav-item me-5">
                    <NavLink to={"/about"} className="nav-link" id="About"  aria-current="page">About Me</NavLink>
                </li>
                <li className="nav-item me-5">
                    <NavLink to={"/projects"} className="nav-link" id="Projects"  aria-current="page" >Projects</NavLink>
                </li>
                <li className="nav-item me-5">
                    <NavLink to={"/services"} className="nav-link" id="Services"  aria-current="page"> Services</NavLink>
                </li>
                <li className="nav-item me-5">
                    <NavLink to={"/contact"} className="nav-link" id="Contact"  aria-current="page" > Contact Us</NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
  );
}

export default Header;
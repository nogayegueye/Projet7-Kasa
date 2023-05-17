import React from 'react';
import logo from '../logo.png';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
      return (
            <nav className="Navbar">
                  <NavLink to="/">
                  <div className="Navbar-logo">
                        <img src={logo} alt="logo" />
                  </div>
                  </NavLink>
                  <NavLink to="/">
                        <div>Accueil</div>
                  </NavLink>
                  <NavLink to="/Apropos">
                        <div>A propos</div>
                  </NavLink>
            </nav>
      );
}

export default Navbar;

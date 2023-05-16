import React from 'react'
import logo from '../logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
      <img src={logo} alt="logo" />
      </div>
      <div>Accueil</div>
      <div>A propos</div>
      </nav>
  )
}

export default Navbar
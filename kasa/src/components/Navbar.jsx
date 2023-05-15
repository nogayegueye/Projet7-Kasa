import React from 'react'
import logo from '../logo.png';
import navbar from './components/navbar.css';

function navbar() {
  return (
    <nav className="navbar">
      <div className="navbar.logo">
      <img src={logo} alt="logo" />
      </div>
      <div>Accueil</div>
      <div>A propos</div>
      </nav>
  )
}

export default navbar
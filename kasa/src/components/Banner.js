import React from 'react'

function banner() {
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

export default banner
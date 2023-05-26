import React from 'react'
import './PageErreure.scss';
import { Link } from 'react-router-dom';

function PageErreure() {
  return (
    <div className='page_erreure' >
      <h1> 404</h1>
      <h2>Oops! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retourner sur le page d'acceuil</Link>
    </div>
  )
}

export default PageErreure;
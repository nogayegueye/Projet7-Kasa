import React from 'react'
import Appartement from './Appartement.js';
import './AppartementGrid.css';

function AppartementGrid() {
  return (
    <div className='grid'>
        <Appartement />
        <Appartement />
        <Appartement />
        <Appartement />
        <Appartement />
        <Appartement />
    </div>
  )
}

export default AppartementGrid
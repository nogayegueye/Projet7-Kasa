import React, { useState, useEffect } from 'react';
import Appartement from './Appartement.js';
import './AppartementGrid.css';
import logements from '../Logement.json';

function AppartementGrid() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetchAppartements();
  }, []);

  function fetchAppartements() {
    setAppartements(logements);
  }

  return (
    <div className='grid'>
      {appartements.map((appartement) => (
        <Appartement
          key={appartement.id}
          title={appartement.title}
          imageUrl={appartement.cover}
          id={appartement.id}
        />
      ))}
    </div>
  );
}

export default AppartementGrid;
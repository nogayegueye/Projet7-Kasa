import React, { useState, useEffect } from 'react'
import Appartement from './Appartement.js';
import './AppartementGrid.css';

function AppartementGrid(){
  const [Appartements, setAppartements] = useState([]);

  useEffect(fetchAppartements, []);

  function fetchAppartements() {
  fetch("Logement.json")
.then((res) =>res.json())
.then((res) =>setAppartements(res))
.catch(console.error);
}
  return (
    <div className='grid'>
      {Appartements.map((appartement) =>(
      <Appartement key={appartement.id} title={appartement.title} imageUrl={appartement.cover} id={appartement.id}/>
      ))}
    </div>
  );
}

export default AppartementGrid;
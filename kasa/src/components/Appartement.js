import React from 'react';
import './Appartement.css';
import { Link } from 'react-router-dom';

function Appartement() {
      return (
            <div className="Appartement">
                 <Link to="/PageApp"><div className="Appartement-title">Titre de la location</div></Link> 
            </div>
      );
}

export default Appartement;

import React from 'react';
import './Appartement.css';
import { Link } from 'react-router-dom';

function Appartement(props) {
      return (
            <Link to={'/logement/' + props.id}>
                  <div className="Appartement">
                        <img src={props.imageUrl} alt="image" />
                        <div className="appartement-title">{props.title}</div>
                  </div>
            </Link>
      );
}

export default Appartement;

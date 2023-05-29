import React, { useState } from 'react';
import './AppartementDescription.scss';

function AppartementDescription(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="appartement_description">
      <p className="description_header" onClick={toggleCollapse}>
        <span>{props.title}</span>
        <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </p>
      {isOpen && (
        <p className="description_content">
          <span>{props.content}</span>
        </p>
      )}
    </div>
  );
}

export default AppartementDescription;

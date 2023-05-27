import React from 'react';
import './AppartementDescription.scss';

function AppartementDescription(props) {
      return (
            <div>
                  <div className="appartement_description">
                        <p className="description_header">
                              <span> {props.title}</span>
                              <i className="fa-solid fa-chevron-down"></i>
                        </p>
                        <p className="description_content">
                              {props.content}
                        </p>
                  </div>
            </div>
      );
}

export default AppartementDescription;

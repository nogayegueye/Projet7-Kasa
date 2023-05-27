import React from 'react';
import './AppartementHeader.scss';

function AppartementHeader(props) {


      const selectedPageApp = props.selectedPageApp;
      const name = selectedPageApp.host.name;
      const [firstName, lastName] = name.split(" ");

      return (
            <div className="appartement_header">
                  <div className="appartement_title">
                        <h1>{selectedPageApp.title}</h1>
                        <h2>{selectedPageApp.location}</h2>
                        <div className="appartement_tags">
                              {selectedPageApp.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                              ))}
                        </div>
                  </div>
                  <div className="appartement_owner">
                        <div className="appartement_owner_details">
                              <h3>
                                    <span>{firstName}</span>
                                    <span>{lastName}</span>
                              </h3>
                              <div className="appartement_owner_badge">
                                    <img src={selectedPageApp.host.picture} alt=''/>
                              </div>
                        </div>
                        <div className="appartement_owner_start">

                                 {[1, 2, 3, 4, 5].map((num) => (
                                    <span key={num} className={props.selectedPageApp.rating >= num ? "on" : ""}>★</span>
                                 ))}   


                              
                              
                        </div>
                  </div>
            </div>
      );
}

export default AppartementHeader;

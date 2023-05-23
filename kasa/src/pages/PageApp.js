import React from 'react';
import Test from './test.png';
import './PageApp.scss';
import AppartementDescription from '../components/AppartementDescription.jsx';

function PageApp() {
      return (
            <div className="appartement_page">
                  <div>
                        <img src={Test} alt="" />
                  </div>
                  <div className="appartement_header">
                        <div className="appartement_title">
                              <h1>Crazt loft on canal</h1>
                              <h2>Paris, Ile de France</h2>
                              <div className="appartement_tags">
                                    <span>Cozy</span>
                                    <span>Canal</span>
                                    <span>Paris 10</span>
                              </div>
                        </div>
                        <div className="appartement_owner">
                              <div className="appartement_owner_details">
                                    <h3>
                                          <span>Alexandre</span>
                                          <span>Dumas</span>
                                    </h3>
                                    <div className="appartement_owner_badge"></div>
                              </div>
                              <div className="appartement_owner_start">
                                    <span className="on">★</span>
                                    <span className="on">★</span>
                                    <span className="on">★</span>
                                    <span className="off">★</span>
                                    <span className="off ">★</span>
                              </div>
                        </div>
                  </div>
                  <div className='appartement_desc-area'>
                  <AppartementDescription/>
                  <AppartementDescription/>
                  </div>
            </div>
      );
}

export default PageApp;

import React, { useState, useEffect } from 'react';
import './PageApp.scss';
import AppartementDescription from '../components/AppartementDescription.js';
import Footer from '../components/Footer.js';
import { useLocation, useParams } from 'react-router-dom';
import Image_Banner from '../components/Image_Banner.js';
import AppartementHeader from '../components/AppartementHeader.js';
import PageErreur from "./PageErreure.js"
import logements from '../Logement.json';

function PageApp() {
      const location = useLocation();
      const [selectedPageApp, setselectedPageApp] = useState(null);

      const params = useParams();

      useEffect(fetchAppartementData, []);

      function fetchAppartementData() {
            const PageApp = logements.find(
                  (pageApp) => pageApp.id === params.id
            );
            setselectedPageApp(PageApp);
      }
      if (selectedPageApp == null) return <PageErreur/>;
      return (
            <div className="appartement_page">
                  <Image_Banner pictures={selectedPageApp.pictures} />
                  <AppartementHeader selectedPageApp={selectedPageApp} />
                  <div className="appartement_desc-area">
                        <AppartementDescription
                              title="Description"
                              content={selectedPageApp.description}
                        />
                        <AppartementDescription
                              title="Equipement"
                              content={selectedPageApp.equipments.map(
                                    (eqm, index) => (
                                          <li key={index}>{eqm}</li>
                                    )
                              )}
                        />
                  </div>
                  <Footer />
            </div>
      );
}

export default PageApp;

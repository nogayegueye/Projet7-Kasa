import React, { useState, useEffect } from 'react';
import './PageApp.scss';
import AppartementDescription from '../components/AppartementDescription.js';
import Footer from '../components/Footer.js';
import { useLocation } from 'react-router-dom';
import Image_Banner from '../components/Image_Banner.js';

function PageApp() {
      const location = useLocation();
      console.log('location', location);
      const [selectedPageApp, setselectedPageApp] = useState(null);

      useEffect(fetchAppartementData, []);

      function fetchAppartementData() {
            fetch('Logement.json')
                  .then((res) => res.json())
                  .then((PageApps) => {
                        const PageApp = PageApps.find(
                              (PageApp) =>
                                    PageApp.id === location.state.AppartementId
                        );
                        setselectedPageApp(PageApp);
                  })
                  .catch(console.error);
      }
      if (selectedPageApp == null) return<div>...laoding</div>
      return (
            <div className="appartement_page">
                  selected PageApp: {JSON.stringify(selectedPageApp)}
                  <Image_Banner imageUrl={selectedPageApp.cover} />
                  {/* <AppartementHeader/> */}
                  <div className="appartement_desc-area">
                        <AppartementDescription />
                        <AppartementDescription />
                  </div>
                  <Footer />
            </div>
      );
}

export default PageApp;

import React from 'react';
import logo_footer from '../logo_footer.png';
import './Footer.css';

function Footer() {
      return (
            <div className="footer">
                  <div className="footer_logo">
                        <img src={logo_footer} alt="Footer" />
                  </div>
                  <div className="footer_text">
                  © 2020 Kasa. All rignhts reserved
                  </div>
            </div>
      );
}

export default Footer;

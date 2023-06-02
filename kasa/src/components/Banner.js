import React from 'react';
import './Banner.css';
import bannerImg from '../bannerImg.png';

function Banner() {
      return (
            <div className="Banner">
                  <div className="banner_img">
                        <img src={bannerImg} alt="bannerImg" />

                        <div className="banner_p">
                              <p>Chez vous, partout et ailleurs</p>
                        </div>
                  </div>
            </div>
      );
}

export default Banner;

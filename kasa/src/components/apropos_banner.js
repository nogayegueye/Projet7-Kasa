import React from 'react';
import Apropos_img from '../apropos_img.png';
import '../pages/Apropos.scss';

function apropos_banner() {
      return (
            <div className='image_apropos'>
                  <img src={Apropos_img} alt="apropos_img" />
            </div>
      );
}

export default apropos_banner;

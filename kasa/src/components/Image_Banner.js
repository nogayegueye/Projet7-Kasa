import React from 'react';
import './Image_banner.scss';
import kalen_emsley_Bkci_8qcdvQ_unsplash from '../kalen_emsley_Bkci_8qcdvQ_unsplash.png';

function Image_Banner(props) {

      const imageUrl = props.imageUrl ? props.imageUrl : kalen_emsley_Bkci_8qcdvQ_unsplash;

      return (
            <div className="appartement_img">
                  <img src={imageUrl} alt=""  />
            </div>
      );
}

export default Image_Banner;

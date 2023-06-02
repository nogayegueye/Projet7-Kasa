import React from 'react';
import './Image_banner.scss';

function Image_Banner(props) {
      return (
            <div className="appartement_img">
                  <img src={props.imageUrl} alt=""  />
            </div>
      );
}

export default Image_Banner;

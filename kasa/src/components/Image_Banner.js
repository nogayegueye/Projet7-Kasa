import React, { useState } from 'react';
import './Image_banner.scss';

function Image_Banner(props) {
      const pitcures = props.pictures

      const[currentPicture, setcurrentPicture] = useState(0);

      const getClassName = (i) =>{
            if (i === currentPicture) return "show";
            return"";
      }
      
      const moveToNext =() =>{
            setcurrentPicture((currentPicture + 1) % pitcures.length);
      };
      
      const moveToPrevious =() =>{
            const newCurrentPicture = currentPicture - 1;
            if (newCurrentPicture < 0){
                  setcurrentPicture(pitcures.length - 1);
                  return;
            }
            setcurrentPicture(currentPicture - 1);
      };


      return (
            <div className="banner_image">
                  <div className='image_container'>
                  {pitcures.map((pic, i) => <img key={pic} src={pic} alt='' className={getClassName(i)}></img>)}
                  </div>
                  <button className='btn_previous' onClick={moveToPrevious}>
                        <i className='fa-solid fa-chevron-left'></i>
                  </button>
                  <button className='btn_next' onClick={moveToNext}>
                  <i className='fa-solid fa-chevron-right'></i>
                  </button>
            </div>
      );
}

export default Image_Banner ;

import React from 'react'
import Banner from '../components/Banner.js'
import AppartementDescription from '../components/AppartementDescription.js';
import './Apropos.scss';
import Footer from '../components/Footer.js';



function Apropos() {
  return (
    <div>
       <Banner/>
       <div className='apropos_container'>
       <AppartementDescription/>
       <AppartementDescription/>
       <AppartementDescription/>
       <AppartementDescription/>
      
      </div>
        <Footer />
    </div>
  )
}

export default Apropos
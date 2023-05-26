import React from "react";
import Banner from "./components/Banner.js";
import AppartementGrid from "./components/AppartementGrid.js";
 import Footer from './components/Footer.js';


import "./App.css";

function App() {
  return (
    <div>
      <Banner />
      <AppartementGrid />
      <Footer/>
     
    </div>
  );
}

export default App;

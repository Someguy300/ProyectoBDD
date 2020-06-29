import React from 'react';

import Footer from '../Components/Footer';
import './Home.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function Home() {
  return (
    <div>
   

   <div className="slider">
        <h1 className="title">Estrenos</h1>
          <ul>
               <li> <img src="../Avengers.png"  width="60%" height="80%"   /> </li>

               <li><img src="../deadpool.png" width="60%" height="80%"    /></li>

               <li> <img src="../frozen.png"   width="60%" height="80%"   /></li>

               <li><img src="../Conjuro.png"   width="60%" height="80%"   /></li>
           </ul>
  
    </div>
    <hr className="linea"></hr>
  <Footer></Footer>
  
  </div>
  );
}

export default Home;

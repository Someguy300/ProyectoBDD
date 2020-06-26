import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Home.css';
function Home() {
  return (
    <div>
   <Navbar></Navbar>

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

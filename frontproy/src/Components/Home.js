import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Components/Home.css';
function Home() {
  return (
    <div>
   <Navbar></Navbar>

    <body>
      <h1 className="Title "> Pròximos Estrenos</h1>
    <div className="slider ">
              <ul>

                  <li>  <img src="Avengers.png"    width="700px"  height="500px"   /></li>
                  <li>  <img src="Conjuro.png"      width="700px"  height="500px"       /></li>
                  <li>  <img src="deadpool.png"       width="700px"  height="500px"      /></li>
                  <li>  <img src="frozen.png"     width="700px"  height="500px"        /></li>       
                           
              </ul>
    </div>
    <h1 className="Title"> Sedes</h1>
    <div></div>
    </body>



  <Footer></Footer>
  </div>
  
  );
}

export default Home;

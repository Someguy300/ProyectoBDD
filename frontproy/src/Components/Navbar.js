

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    
    <div className="center-text">
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <a class="navbar-brand" link to="/">Metrocine</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          
          <a class="nav-link" href="/">
          <link to="/"></link>
            Inicio</a>
        </li>
        <li class="nav-item">
        
          <a class="nav-link" href="/Peliculas">
          <link to="/Peliculas"></link>
            Películas</a>
        </li>
        <li class="nav-item">
       
          <a class="nav-link" href="/Estrenos">
          <link to="/Estrenos"></link>
            Estrenos</a>
        </li>
        <li class="nav-item">
        <link to="/Tienda"></link>
          <a class="nav-link" href="/Tienda" >
          <link to="/Tienda"></link>
            Tienda</a>
        </li>
      </ul>
     
    </div>
  </nav>
  </div>

  );
}

export default Navbar;

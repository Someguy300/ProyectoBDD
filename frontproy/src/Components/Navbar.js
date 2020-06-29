

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <Router>
    <div className="center-text">
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <a class="navbar-brand" link to="/">Metrocine</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Películas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Estrenos</a>
        </li>
        <li class="nav-item">
         
            <a class="nav-link" href="#" >Tienda</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  </Router>

  );
}

export default Navbar;

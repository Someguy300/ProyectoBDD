import React from 'react';
import '../Components/Navbar.css';
function Navbar() {
  return (
    <div class="center-text">
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <a class="navbar-brand"  href="#">Metrocine</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Películas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Estrenos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Tienda</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>

  );
}

export default Navbar;

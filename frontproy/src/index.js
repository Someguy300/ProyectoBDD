import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Components/Home';
import Peliculas from './Components/Peliculas';
import Estrenos from './Components/Estrenos';
import Tienda from './Components/Tienda';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>    
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
  <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Peliculas" component={Peliculas}></Route>
      <Route exact path="/Estrenos" component={Estrenos}></Route>
      <Route exact path="/Tienda" component={Tienda}></Route>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

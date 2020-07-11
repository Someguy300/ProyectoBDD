import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Components/Home';
import Peliculas from './Components/Peliculas';
import Estrenos from './Components/Estrenos';
import Tienda from './Components/Tienda';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
ReactDOM.render(
  <React.StrictMode>    
    <Router>
    <Navbar></Navbar>
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

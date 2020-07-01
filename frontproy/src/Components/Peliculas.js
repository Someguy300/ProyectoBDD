import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PeliculasList from "./peliculas/PeliculasList";
import NewPeliculaModal from "./peliculas/NewPeliculaModal";

import axios from "axios";

import { API_URL_PE } from "../constants";

class Peliculas extends Component {
  state = {
    peliculas: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPeliculas = () => {
    axios.get(API_URL_PE).then(res => this.setState({ peliculas: res.data }));
  };

  resetState = () => {
    this.getPeliculas();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PeliculasList
              peliculas={this.state.peliculas}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewPeliculaModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Peliculas;

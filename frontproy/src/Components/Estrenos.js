import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SalasList from "./salas/SalasList";
import NewSalaModal from "./salas/NewSalaModal";

import axios from "axios";

import { API_URL_SA } from "../constants";

class Estrenos extends Component {
  state = {
    salas: []
  };

  componentDidMount() {
    this.resetState();
  }

  getSalas = () => {
    axios.get(API_URL_SA).then(res => this.setState({ salas: res.data }));
  };

  resetState = () => {
    this.getSalas();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <SalasList
              salas={this.state.salas}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewSalaModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Estrenos;

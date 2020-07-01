import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ProductosList from "./productos/ProductosList";
import NewProductoModal from "./productos/NewProductoModal";

import axios from "axios";

import { API_URL_PR } from "../constants";

class Tienda extends Component {
  state = {
    productos: []
  };

  componentDidMount() {
    this.resetState();
  }

  getProductos = () => {
    axios.get(API_URL_PR).then(res => this.setState({ productos: res.data }));
  };

  resetState = () => {
    this.getProductos();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ProductosList
              productos={this.state.productos}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewProductoModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tienda;

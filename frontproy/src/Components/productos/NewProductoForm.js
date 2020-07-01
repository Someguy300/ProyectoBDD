import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_PR } from "../../constants";

class NewProductoForm extends React.Component {
  state = {
    product_id: 0,
    nombre: "",
    precio: "",
    tipo: "",
  };

  componentDidMount() {
    if (this.props.producto) {
      const { product_id, nombre, precio, tipo } = this.props.producto;
      this.setState({ product_id, nombre, precio, tipo });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createProducto = e => {
    e.preventDefault();
    axios.post(API_URL_PR, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editProducto = e => {
    e.preventDefault();
    axios.put(API_URL_PR + this.state.product_id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.producto ? this.editProducto : this.createProducto}>
        <FormGroup>
          <Label for="nombre">nombre:</Label>
          <Input
            type="text"
            name="nombre"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.nombre)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="precio">precio:</Label>
          <Input
            type="text"
            name="precio"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.precio)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tipo">tipo:</Label>
          <Input
            type="text"
            name="tipo"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.tipo)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewProductoForm;
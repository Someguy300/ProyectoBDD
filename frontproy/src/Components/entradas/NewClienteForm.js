import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../../constants";

class NewClienteForm extends React.Component {
  state = {
    cliente_id: 0,
    nombre: "",
    cedula: "",
    apellido: "",
    correo: "",
    
  };

  componentDidMount() {
    if (this.props.cliente) {
      const { cliente_id, nombre, cedula, apellido, correo } = this.props.cliente;
      this.setState({ cliente_id, nombre, cedula, apellido, correo });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createCliente = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editCliente = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.cliente_id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.cliente ? this.editCliente : this.createCliente}>
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
          <Label for="cedula">cedula:</Label>
          <Input
            type="text"
            name="cedula"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.cedula)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apellido">apellido:</Label>
          <Input
            type="text"
            name="apellido"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.apellido)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="correo">correo:</Label>
          <Input
            type="email"
            name="correo"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.correo)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewClienteForm;
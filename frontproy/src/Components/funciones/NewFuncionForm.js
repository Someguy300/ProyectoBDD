import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_FU } from "../../constants";

class NewFuncionForm extends React.Component {
  state = {
    id_funcion: 0,
    fecha: "",
    horario: "",
    pelicula_id: "",
    sala_id: "",
    
  };

  componentDidMount() {
    if (this.props.funcion) {
      const { id_funcion, fecha, horario, pelicula_id, sala_id } = this.props.funcion;
      this.setState({ id_funcion, fecha, horario, pelicula_id, sala_id });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createFuncion = e => {
    e.preventDefault();
    axios.post(API_URL_FU, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editFuncion = e => {
    e.preventDefault();
    axios.put(API_URL_FU + this.state.id_funcion, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.funcion ? this.editFuncion : this.createFuncion}>
        <FormGroup>
          <Label for="fecha">fecha:</Label>
          <Input
            type="text"
            name="fecha"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.fecha)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="horario">horario:</Label>
          <Input
            type="text"
            name="horario"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.horario)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pelicula_id">pelicula_id:</Label>
          <Input
            type="text"
            name="pelicula_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.pelicula_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sala_id">sala_id:</Label>
          <Input
            type="text"
            name="sala_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.sala_id)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewFuncionForm;
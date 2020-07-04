import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_E } from "../../constants";

class NewEntradaForm extends React.Component {
  state = {
    num_entrada: 0,
    pelicula: "",
    sala: "",
    funcion_id: "",
    cliente_id: "",
    precio: "",
    ent_compradas: "",
    fecha: "",
    horario: "",
    met_pago: "",
    
  };

  componentDidMount() {
    if (this.props.entrada) {
      const { num_entrada, pelicula, sala, funcion_id, cliente_id, precio, ent_compradas, 
        fecha, horario, met_pago} = this.props.entrada;
      this.setState({ num_entrada, pelicula, sala, funcion_id, cliente_id, precio, ent_compradas, 
        fecha, horario, met_pago});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createEntrada = e => {
    e.preventDefault();
    axios.post(API_URL_E, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editEntrada = e => {
    e.preventDefault();
    axios.put(API_URL_E + this.state.num_entrada, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.entrada ? this.editEntrada : this.createEntrada}>
        <FormGroup>
          <Label for="pelicula">pelicula:</Label>
          <Input
            type="text"
            name="pelicula"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.pelicula)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sala">sala:</Label>
          <Input
            type="text"
            name="sala"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.sala)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="funcion_id">funcion_id:</Label>
          <Input
            type="text"
            name="funcion_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.funcion_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cliente_id">cliente_id:</Label>
          <Input
            type="cliente_id"
            name="text"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.cliente_id)}
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
          <Label for="ent_compradas">ent_compradas:</Label>
          <Input
            type="text"
            name="ent_compradas"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ent_compradas)}
          />
        </FormGroup>
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
          <Label for="met_pago">met_pago:</Label>
          <Input
            type="text"
            name="met_pago"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.met_pago)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewEntradaForm;
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_SE } from "../../constants";

class NewSedeForm extends React.Component {
  state = {
    sede_id: 0,
    nombre: "",
    ubicacion: "",
    nro_salas: "",
  };

  componentDidMount() {
    if (this.props.sede) {
      const { sede_id, nombre, ubicacion, nro_salas } = this.props.sede;
      this.setState({ sede_id, nombre, ubicacion, nro_salas });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSede = e => {
    e.preventDefault();
    axios.post(API_URL_SE, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editSede = e => {
    e.preventDefault();
    axios.put(API_URL_SE + this.state.sede_id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.sede ? this.editSede : this.createSede}>
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
          <Label for="ubicacion">ubicacion:</Label>
          <Input
            type="text"
            name="ubicacion"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ubicacion)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nro_salas">nro_salas:</Label>
          <Input
            type="number"
            name="nro_salas"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.nro_salas)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewSedeForm;
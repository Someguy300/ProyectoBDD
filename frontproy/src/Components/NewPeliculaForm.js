import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../Constants";

class NewPeliculaForm extends React.Component {
  state = {
    pelicula_id: 0,
    nombre: "",
    sinopsis: "",
    fecha_estreno: "",
    genero: "",
    duracion: "",
    lenguaje: ""
  };

  componentDidMount() {
    if (this.props.pelicula) {
      const { pelicula_id, nombre, sinopsis, fecha_estreno, genero, duracion, lenguaje } = this.props.pelicula;
      this.setState({ pelicula_id, nombre, sinopsis, fecha_estreno, genero, duracion, lenguaje });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPelicula = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPelicula = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pelicula_id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.pelicula ? this.editPelicula : this.createPelicula}>
        <FormGroup>
          <Label for="nombre">Nombre:</Label>
          <Input
            type="text"
            name="nombre"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sinopsis">Sinopsis:</Label>
          <Input
            type="text"
            name="sinopsis"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.sinopsis)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="fecha_estreno">Fecha estreno:</Label>
          <Input
            type="text"
            name="fecha_estreno"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.fecha_estreno)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="estatus">Estatus:</Label>
          <Input
            type="text"
            name="estatus"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.estatus)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="genero">Genero:</Label>
          <Input
            type="text"
            name="genero"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.genero)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="duracion">Duracion:</Label>
          <Input
            type="text"
            name="duracion"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.duracion)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lenguaje">Lenguaje:</Label>
          <Input
            type="text"
            name="lenguaje"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.lenguaje)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPeliculaForm;
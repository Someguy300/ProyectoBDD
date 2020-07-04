import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_SA } from "../../constants";

class NewSalaForm extends React.Component {
  state = {
    sala_id: 0,
    num_butacas: "",
    disponibilidad: "",
    sede_id: "",
    
  };

  componentDidMount() {
    if (this.props.sala) {
      const { sala_id, num_butacas, disponibilidad, sede_id } = this.props.sala;
      this.setState({ sala_id, num_butacas, disponibilidad, sede_id });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSala = e => {
    e.preventDefault();
    axios.post(API_URL_SA, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editSala = e => {
    e.preventDefault();
    axios.put(API_URL_SA + this.state.sala_id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.sala ? this.editSala : this.createSala}>
        <FormGroup>
          <Label for="num_butacas">num_butacas:</Label>
          <Input
            type="text"
            name="num_butacas"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.num_butacas)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="disponibilidad">disponibilidad:</Label>
          <Input
            type="text"
            name="disponibilidad"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.disponibilidad)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sede_id">sede_id:</Label>
          <Input
            type="text"
            name="sede_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.sede_id)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewSalaForm;
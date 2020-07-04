import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_FA } from "../../constants";

class NewFacturaForm extends React.Component {
  state = {
    num_factura: 0,
    sede_id: "",
    cliente_id: "",
    producto_id: "",
    fecha: "",
    met_pago:"",
    
  };

  componentDidMount() {
    if (this.props.factura) {
      const { num_factura, sede_id, cliente_id, producto_id, fecha, met_pago } = this.props.factura;
      this.setState({ num_factura, sede_id, cliente_id, producto_id, fecha, met_pago });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createFactura = e => {
    e.preventDefault();
    axios.post(API_URL_FA, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editFactura = e => {
    e.preventDefault();
    axios.put(API_URL_FA + this.state.num_factura, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.factura ? this.editFactura : this.createFactura}>
        <FormGroup>
          <Label for="sede_id">sede_id:</Label>
          <Input
            type="text"
            name="sede_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.sede_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cliente_id">cliente_id:</Label>
          <Input
            type="text"
            name="cliente_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.cliente_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="producto_id">producto_id:</Label>
          <Input
            type="text"
            name="producto_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.producto_id)}
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
        </FormGroup><FormGroup>
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

export default NewFacturaForm;
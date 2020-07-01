import React, { Component } from "react";
import { Table } from "reactstrap";
import NewClienteModal from "./NewClienteModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ClienteList extends Component {
  render() {
    const clientes = this.props.clientes;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>nombre</th>
            <th>cedula</th>
            <th>apellido</th>
            <th>correo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!clientes || clientes.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            clientes.map(cliente => (
              <tr key={cliente.cliente_id}>
                <td>{cliente.nombre}</td>
                <td>{cliente.cedula}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.correo}</td>
                <td align="center">
                  <NewClienteModal
                    create={false}
                    cliente={cliente}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    cliente_id={cliente.cliente_id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ClienteList;
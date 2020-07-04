import React, { Component } from "react";
import { Table } from "reactstrap";
import NewEntradaModal from "./NewEntradaModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class EntradaList extends Component {
  render() {
    const entradas = this.props.entradas;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>pelicula</th>
            <th>sala</th>
            <th>apellido</th>
            <th>funcion_id</th>
            <th>cliente_id</th>
            <th>ent_compradas</th>
            <th>fecha</th>
            <th>horario</th>
            <th>met_pago</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!entradas || entradas.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            entradas.map(entrada => (
              <tr key={entrada.num_entrada}>
                <td>{entrada.pelicula}</td>
                <td>{entrada.sala}</td>
                <td>{entrada.funcion_id}</td>
                <td>{entrada.cliente_id}</td>
                <td>{entrada.precio}</td>
                <td>{entrada.ent_compradas}</td>
                <td>{entrada.fecha}</td>
                <td>{entrada.horario}</td>
                <td>{entrada.met_pago}</td>
                <td align="center">
                  <NewEntradaModal
                    create={false}
                    entrada={entrada}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    num_entrada={entrada.num_entrada}
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

export default EntradaList;
import React, { Component } from "react";
import { Table } from "reactstrap";
import NewFuncionModal from "./NewFuncionModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class FuncionesList extends Component {
  render() {
    const funciones = this.props.funciones;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>fecha</th>
            <th>horario</th>
            <th>pelicula_id</th>
            <th>sala_id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!funciones || funciones.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            funciones.map(funcion => (
              <tr key={funcion.id_funcion}>
                <td>{funcion.fecha}</td>
                <td>{funcion.horario}</td>
                <td>{funcion.pelicula_id}</td>
                <td>{funcion.sala_id}</td>
                <td align="center">
                  <NewFuncionModal
                    create={false}
                    funcion={funcion}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id_funcion={funcion.id_funcion}
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

export default FuncionesList;
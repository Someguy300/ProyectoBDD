import React, { Component } from "react";
import { Table } from "reactstrap";
import NewSedeModal from "./NewSedeModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class SedesList extends Component {
  render() {
    const sedes = this.props.sedes;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>nombre</th>
            <th>ubicacion</th>
            <th>nro_salas</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!sedes || sedes.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            sedes.map(sede => (
              <tr key={sede.sede_id}>
                <td>{sede.nombre}</td>
                <td>{sede.ubicacion}</td>
                <td>{sede.nro_salas}</td>
                <td align="center">
                  <NewSedeModal
                    create={false}
                    sede={sede}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    sede_id={sede.sede_id}
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

export default SedesList;
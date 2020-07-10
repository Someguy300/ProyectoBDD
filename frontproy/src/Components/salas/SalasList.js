import React, { Component } from "react";
import { Table } from "reactstrap";
import NewSalaModal from "./NewSalaModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class SalasList extends Component {
  render() {
    const salas = this.props.salas;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>num_butacas</th>
            <th>disponibilidad</th>
            <th>sede_id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!salas || salas.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            salas.map(sala => (
              <tr key={sala.sala_id}>
                <td>{sala.num_butacas}</td>
                <td>{sala.disponibilidad}</td>
                <td>{sala.sede_id}</td>
                <td align="center">
                  <NewSalaModal
                    create={false}
                    sala={sala}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    sala_id={sala.sala_id}
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

export default SalasList;
import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPeliculaModal from "./NewPeliculaModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PeliculaList extends Component {
  render() {
    const pelicula = this.props.pelicula;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Sinopsis</th>
            <th>Fecha Estreno</th>
            <th>Estatus</th>
            <th>Genero</th>
            <th>Duracion</th>
            <th>Lenguaje</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!pelicula || pelicula.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            pelicula.map(pelicula => (
              <tr key={pelicula.pelicula_id}>
                <td>{pelicula.nombre}</td>
                <td>{pelicula.sinopsis}</td>
                <td>{pelicula.fecha_estreno}</td>
                <td>{pelicula.genero}</td>
                <td>{pelicula.duracion}</td>
                <td>{pelicula.lenguaje}</td>
                <td align="center">
                  <NewPeliculaModal
                    create={false}
                    pelicula={pelicula}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pelicula_id={pelicula.pelicula_id}
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

export default PeliculaList;
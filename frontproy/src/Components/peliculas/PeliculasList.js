import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPeliculaModal from "./NewPeliculaModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PeliculasList extends Component {
  render() {
    const peliculas = this.props.peliculas;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>nombre</th>
            <th>sinopsis</th>
            <th>fecha_estreno</th>
            <th>estatus</th>
            <th>genero</th>
            <th>duracion</th>
            <th>lenguaje</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!peliculas || peliculas.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            peliculas.map(pelicula => (
              <tr key={pelicula.pelicula_id}>
                <td>{pelicula.nombre}</td>
                <td>{pelicula.sinopsis}</td>
                <td>{pelicula.fecha_estreno}</td>
                <td>{pelicula.estatus}</td>
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

export default PeliculasList;
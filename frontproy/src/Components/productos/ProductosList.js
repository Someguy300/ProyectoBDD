import React, { Component } from "react";
import { Table } from "reactstrap";
import NewProductoModal from "./NewProductoModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ProductosList extends Component {
  render() {
    const productos = this.props.productos;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>nombre</th>
            <th>precio</th>
            <th>tipo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!productos || productos.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            productos.map(producto => (
              <tr key={producto.cliente_id}>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.tipo}</td>
                <td align="center">
                  <NewProductoModal
                    create={false}
                    producto={producto}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    product_id={producto.product_id}
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

export default ProductosList;
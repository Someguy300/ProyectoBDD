import React, { Component } from "react";
import { Table } from "reactstrap";
import NewFacturaModal from "./NewFacturaModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class FacturasList extends Component {
  render() {
    const facturas = this.props.facturas;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>sede_id</th>
            <th>cliente_id</th>
            <th>producto_id</th>
            <th>fecha</th>
            <th>met_pago</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!facturas || facturas.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            facturas.map(factura => (
              <tr key={factura.num_factura}>
                <td>{factura.sede_id}</td>
                <td>{factura.cliente_id}</td>
                <td>{factura.producto_id}</td>
                <td>{factura.fecha}</td>
                <td>{factura.met_pago}</td>
                <td align="center">
                  <NewFacturaModal
                    create={false}
                    factura={factura}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    num_factura={factura.num_factura}
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

export default FacturasList;
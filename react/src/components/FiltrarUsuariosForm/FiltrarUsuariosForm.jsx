import './FiltrarUsuariosForm.css';
import React, { useState } from "react";

const FiltrarUsuariosForm = () => {
  const [orders] = useState([
    {
      id: 1,
      lastAccess: "18/02/2015",
      name: "Alejandro Nortes",
      dni: "48500001Q",
      numAccess: 123,
      usedMachines: 555,
      status: "Activo",
    },
    {
        id: 2,
        lastAccess: "25/02/2015",
        name: "Isa Martinez",
        dni: "48737194X",
        numAccess: 182,
        usedMachines: 333,
        status: "Inactivo",
      },
  ]);

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table table-striped table-bordered table-hover" id="datatable_orders">
        <thead>
          <tr className="heading">
            <th width="2%">
              <div className="checker">
                <span>
                  <input type="checkbox" className="group-checkable" />
                </span>
              </div>
            </th>
            <th width="5%">Usuario #</th>
            <th width="15%">Último Acceso</th>
            <th width="15%">Nombre</th>
            <th width="10%">DNI</th>
            <th width="10%">Num. Accesos</th>
            <th width="10%">Máquinas usadas</th>
            <th width="10%">Estado</th>
            <th width="10%">Acciones</th>
          </tr>
          <tr className="filter">
            <td></td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="order_id" />
            </td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="order_date_from" placeholder="Desde" />
              <input type="text" className="form-control form-filter input-sm" name="order_date_to" placeholder="Hasta" />
            </td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="order_customer_name" />
            </td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="order_ship_to" />
            </td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="order_base_price_from" placeholder="Desde" />
              <input type="text" className="form-control form-filter input-sm" name="order_base_price_to" placeholder="Hasta" />
            </td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="order_purchase_price_from" placeholder="Desde" />
              <input type="text" className="form-control form-filter input-sm" name="order_purchase_price_to" placeholder="Hasta" />
            </td>
            <td>
              <select name="order_status" className="form-control form-filter input-sm">
                <option value="">Seleccionar...</option>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </td>
            <td>
              <button className="btn btn-sm btn-blue-dark filter-submit margin-bottom">
                <i className="fa fa-search"></i> Buscar
              </button>
              <button className="btn btn-sm btn-red filter-cancel">
                <i className="fa fa-times"></i> Limpiar
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <div className="checker">
                  <span>
                    <input type="checkbox" className="group-checkable" />
                  </span>
                </div>
              </td>
              <td>{order.id}</td>
              <td>{order.lastAccess}</td>
              <td>{order.name}</td>
              <td>{order.dni}</td>
              <td>{order.numAccess}</td>
              <td>{order.usedMachines}</td>
              <td>{order.status}</td>
              <td>
                <a href="usuario-historial.html" className="btn btn-sm btn-blue-dark">
                  <i className="fa fa-edit"></i> Detalles
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FiltrarUsuariosForm;

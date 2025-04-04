import './FiltrarEquiposForm.css';
import React, { useState } from 'react';

const OrdersTable = () => {
  const [orders] = useState([
    {
      id: 1,
      alias: 'Equipo en la entrada',
      type: 'Control de acceso',
      serialNumber: 'CA12152025552',
      users: '555',
      status: 'Activo',
    },
    {
      id: 2,
      alias: 'Control de taquilla',
      type: 'Control taquilla',
      serialNumber: 'CA12152025553',
      users: '123',
      status: 'Inactivo',
    },

  ]);

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table table-striped table-bordered table-hover dataTable no-footer" aria-describedby="datatable_orders_info">
        <thead>
          <tr role="row" className="heading">
            <th width="2%" className="sorting_disabled" rowSpan="1" colSpan="1">
              <div className="checker">
                <span><input type="checkbox" className="group-checkable" /></span>
              </div>
            </th>
            <th width="5%" className="sorting">ID&nbsp;#</th>
            <th width="15%" className="sorting">Alias</th>
            <th width="10%" className="sorting">Tipo</th>
            <th width="10%" className="sorting">Número de serie</th>
            <th width="13%" className="sorting">Usuarios autorizados</th>
            <th width="10%" className="sorting">Estado</th>
            <th width="10%" className="sorting">Acciones</th>
          </tr>
          <tr role="row" className="filter">
            <td rowSpan="1" colSpan="1"></td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="orderId"/>
            </td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="alias"/>
            </td>
            <td>
              <select name="type" className="form-control form-filter input-sm" >
                <option value="">Seleccionar...</option>
                <option value="Control acceso">Control acceso</option>
                <option value="Control taquilla">Control taquilla</option>
                <option value="Control equipo">Control equipo</option>
                <option value="Equipos a motor">Equipos a motor</option>
              </select>
            </td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="serialNumber"/>
            </td>
            <td>
              <input type="text" className="form-control form-filter input-sm" name="users"/>
            </td>
            <td>
              <select name="status" className="form-control form-filter input-sm">
                <option value="">Seleccionar...</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </td>
            <td>
              <div className="margin-bottom-5">
                <button className="btn btn-sm blue-dark filter-submit margin-bottom btn-blue-dark">
                  <i className="fa fa-search"></i> Buscar
                </button>
              </div>
              <button className="btn btn-sm red filter-cancel btn-red">
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
                  <span><input type="checkbox" className="group-checkable" /></span>
                </div>
              </td>
              <td>{order.id}</td>
              <td>{order.alias}</td>
              <td>{order.type}</td>
              <td>{order.serialNumber}</td>
              <td>{order.users}</td>
              <td>{order.status}</td>
              <td>
                <a href="equipos-historial.html" className="btn btn-sm blue-dark btn-blue-dark">
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

export default OrdersTable;

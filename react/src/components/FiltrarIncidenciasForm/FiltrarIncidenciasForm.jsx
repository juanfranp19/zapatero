import './FiltrarIncidenciasForm.css';
import React, { useState } from "react";

const FiltrarIncidenciasForm = () => {
  const [orders] = useState([
    {
      id: 1,
      equipo: "Equipo en la entrada",
      usuario: "Alejandro Nortes",
      fecha: "18/02/2015",
      descripcion: "No tiene acceso al equipo",
    },
    {
      id: 2,
      equipo: "Tractor #1",
      usuario: "Alejandro Nortes",
      fecha: "18/02/2015",
      descripcion: "No tiene acceso al equipo",
    },
  ]);

  return (
    <div className="container mt-5">
      <table className="table table-striped table-bordered table-hover" id="datatable_orders">
        <thead>
          <tr role="row" className="heading">
            <th width="2%">
              <div className="checker">
                <span>
                  <input type="checkbox" className="group-checkable" />
                </span>
              </div>
            </th>
            <th width="5%">ID</th>
            <th width="15%">Equipo</th>
            <th width="15%">Usuario</th>
            <th width="15%">Fecha</th>
            <th width="10%">Descripción</th>
            <th width="10%">Acciones</th>
          </tr>
          <tr role="row" className="filter">
            <td></td>
            <td>
              <input
                type="text"
                className="form-control form-filter input-sm"
                name="order_id"
                placeholder="Buscar ID"
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control form-filter input-sm"
                name="order_customer_name"
                placeholder="Buscar Equipo"
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control form-filter input-sm"
                name="order_customer_name"
                placeholder="Buscar Usuario"
              />
            </td>
            <td>
              <div className="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                <input
                  type="text"
                  className="form-control form-filter input-sm"
                  readonly=""
                  name="order_date_from"
                  placeholder="Desde"
                />
                <span className="input-group-btn">
                  <button className="btn btn-sm default" type="button">
                    <i className="fa fa-calendar"></i>
                  </button>
                </span>
              </div>
              <div className="input-group date date-picker" data-date-format="dd/mm/yyyy">
                <input
                  type="text"
                  className="form-control form-filter input-sm"
                  readonly=""
                  name="order_date_to"
                  placeholder="Hasta"
                />
                <span className="input-group-btn">
                  <button className="btn btn-sm default" type="button">
                    <i className="fa fa-calendar"></i>
                  </button>
                </span>
              </div>
            </td>
            <td>
              <input
                type="text"
                className="form-control form-filter input-sm"
                name="order_description"
                placeholder="Buscar Descripción"
              />
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
                  <span>
                    <input type="checkbox" className="group-checkable" />
                  </span>
                </div>
              </td>
              <td>{order.id}</td>
              <td>
                <a href="equipos-historial.html" target="_blank">
                  {order.equipo}
                </a>
              </td>
              <td>
                <a href="usuario-historial.html" target="_blank">
                  {order.usuario}
                </a>
              </td>
              <td>{order.fecha}</td>
              <td>{order.descripcion}</td>
              <td>
                <a href="" className="btn btn-sm blue-dark btn-blue-dark" title="Editar">
                  <i className="fa fa-edit"></i>
                </a>&nbsp;
                <a href="" className="btn btn-sm red btn-red" title="Eliminar">
                  <i className="fa fa-times"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FiltrarIncidenciasForm;

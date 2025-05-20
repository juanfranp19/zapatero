import './FiltrarMovimientosForm.css';
import React from 'react';
import { useGetMovimientos } from '../../hooks/useMovimiento';

const FiltrarMovimientosForm = () => {
  const { movimientos, cargando } = useGetMovimientos();

  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        className="table table-striped table-bordered table-hover dataTable no-footer"
        id="datatable_orders"
        aria-describedby="datatable_orders_info"
        role="grid"
      >
        <thead>
          <tr role="row" className="heading">
            <th width="2%" className="sorting_disabled" rowSpan="1" colSpan="1">
              <div className="checker">
                <span>
                  <input type="checkbox" className="group-checkable" />
                </span>
              </div>
            </th>
            <th width="5%">ID</th>
            <th width="15%">Equipo</th>
            <th width="15%">Trabajador</th>
            <th width="15%">Fecha</th>
            <th width="10%">Origen</th>
            <th width="10%">Destino</th>
            <th width="10%">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cargando ? (
            <tr>
              <td colSpan="9" style={{ textAlign: 'center' }}>Cargando movimientos...</td>
            </tr>
          ) : (
            movimientos.map((movimiento) => (
              <tr key={movimiento.id}>
                <td>
                  <div className="checker">
                    <span><input type="checkbox" className="group-checkable" /></span>
                  </div>
                </td>
                <td>{movimiento.id}</td>
                <td>{movimiento.equipo ? movimiento.equipo.nombre : 'N/A'}</td>
                <td>
                  {movimiento.trabajador
                    ? `${movimiento.trabajador.nombre} ${movimiento.trabajador.apellidos}`
                    : 'N/A'}
                </td>
                <td>{movimiento.fecha}</td>
                <td>{movimiento.sala_origen ? movimiento.sala_origen.nombre : 'N/A'}</td>
                <td>{movimiento.sala_destino ? movimiento.sala_destino.nombre : 'N/A'}</td>
                <td>
                    <a href="usuario-movimientos.html" className="btn btn-sm btn-blue-dark">
                        <i className="fa fa-edit"></i> Detalles
                    </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FiltrarMovimientosForm;

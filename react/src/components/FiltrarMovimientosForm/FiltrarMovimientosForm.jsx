import './FiltrarMovimientosForm.css';
import React, { useState } from 'react';

const FiltrarMovimientosForm = () => {
    const [orders] = useState([
        {
            id: 1,
            equipo: 'Equipo en la entrada',
            usuario: 'Alejandro Nortes',
            desde: '18/02/2015',
            hasta: '',
            ultimaVez: '18/02/2015',
            estado: 'Activo',
        },
        {
            id: 2,
            equipo: 'Tractor #1',
            usuario: 'Alejandro Nortes',
            desde: '18/02/2015',
            hasta: '18/02/2015',
            ultimaVez: '18/02/2015',
            estado: 'Activo',
        },
    ]);

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
                        <th width="5%" className="sorting" tabIndex="0" aria-controls="datatable_orders" rowSpan="1" colSpan="1">
                            ID
                        </th>
                        <th width="15%" className="sorting" tabIndex="0" aria-controls="datatable_orders" rowSpan="1" colSpan="1">
                            Equipo
                        </th>
                        <th width="15%" className="sorting" tabIndex="0" aria-controls="datatable_orders" rowSpan="1" colSpan="1">
                            Usuario
                        </th>
                        <th width="15%" className="sorting" tabIndex="0" aria-controls="datatable_orders" rowSpan="1" colSpan="1">
                            Desde
                        </th>
                        <th width="10%" className="sorting" tabIndex="0" aria-controls="datatable_orders" rowSpan="1" colSpan="1">
                            Hasta
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="datatable_orders" rowSpan="1" colSpan="1">
                            Última vez
                        </th>
                        <th width="10%" className="sorting" tabIndex="0" aria-controls="datatable_orders" rowSpan="1" colSpan="1">
                            Estado
                        </th>
                        <th width="10%" className="sorting" tabIndex="0" aria-controls="datatable_orders" rowSpan="1" colSpan="1">
                            Acciones
                        </th>
                    </tr>
                    <tr role="row" className="filter">
                        <td rowSpan="1" colSpan="1"></td>
                        <td rowSpan="1" colSpan="1">
                            <input type="text" className="form-control form-filter input-sm" name="order_id" />
                        </td>
                        <td rowSpan="1" colSpan="1">
                            <input type="text" className="form-control form-filter input-sm" name="order_customer_name" />
                        </td>
                        <td rowSpan="1" colSpan="1">
                            <input type="text" className="form-control form-filter input-sm" name="order_customer_name" />
                        </td>
                        <td rowSpan="1" colSpan="1">
                            {/* Contenedor para "Desde" y "Hasta" */}
                            <div className="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                                {/* Campo de "Desde" */}
                                <input
                                    type="date"
                                    className="form-control form-filter input-sm"
                                    readOnly=""
                                    name="order_date_from"
                                    placeholder="Desde"/>
                            </div>
                            <div className="input-group date date-picker" data-date-format="dd/mm/yyyy">
                                {/* Campo de "Hasta" */}
                                <input
                                    type="date"
                                    className="form-control form-filter input-sm"
                                    readOnly=""
                                    name="order_date_to"
                                    placeholder="Hasta"/>
                            </div>
                        </td>
                        <td rowSpan="1" colSpan="1">
                            {/* Contenedor para "Desde" y "Hasta" */}
                            <div className="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                                {/* Campo de "Desde" */}
                                <input
                                    type="date"
                                    className="form-control form-filter input-sm"
                                    readOnly=""
                                    name="order_date_from"
                                    placeholder="Desde"/>
                            </div>
                            <div className="input-group date date-picker" data-date-format="dd/mm/yyyy">
                                {/* Campo de "Hasta" */}
                                <input
                                    type="date"
                                    className="form-control form-filter input-sm"
                                    readOnly=""
                                    name="order_date_to"
                                    placeholder="Hasta"/>
                            </div>
                        </td>
                        <td rowSpan="1" colSpan="1">
                            <div className="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                                <input
                                    type="date"
                                    className="form-control form-filter input-sm"
                                    readOnly=""
                                    name="order_date_from"
                                    placeholder="Desde"/>
                            </div>
                            <div className="input-group date date-picker" data-date-format="dd/mm/yyyy">
                                <input
                                    type="date"
                                    className="form-control form-filter input-sm"
                                    readOnly=""
                                    name="order_date_to"
                                    placeholder="Hasta"/>
                            </div>
                        </td>

                        <td rowSpan="1" colSpan="1">
                            <select name="order_status" className="form-control form-filter input-sm">
                                <option value="">Seleccionar...</option>
                                <option value="activo">Activo</option>
                                <option value="inactivo">Inactivo</option>
                            </select>
                        </td>
                        <td rowSpan="1" colSpan="1">
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
                                <a href="equipos-historial.html" target="_blank">{order.equipo}</a>
                            </td>
                            <td>
                                <a href="usuario-historial.html" target="_blank">{order.usuario}</a>
                            </td>
                            <td>{order.desde}</td>
                            <td>{order.hasta}</td>
                            <td>{order.ultimaVez}</td>
                            <td>{order.estado}</td>
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

export default FiltrarMovimientosForm;

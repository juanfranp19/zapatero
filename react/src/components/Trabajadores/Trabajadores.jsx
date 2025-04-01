import React, { useState } from "react";

const Trabajadores = () => {
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [trabajadores, setTrabajadores] = useState([]);
  const [filteredTrabajadores, setFilteredTrabajadores] = useState([]);

  const trabajadoresData = [
    // Aquí puedes poner tus datos simulados o usar una llamada a la API
    { id: 1, nombre: "Juan", apellidos: "Pérez", dni: "12345678A", numAccesos: 5, numUsos: 10, estado: "Activo", borrado: false, ultimoAcceso: "2025-03-01" },
    { id: 2, nombre: "Ana", apellidos: "González", dni: "87654321B", numAccesos: 3, numUsos: 7, estado: "Activo", borrado: false, ultimoAcceso: "2025-03-05" },
    // Otros trabajadores...
  ];

  const handleBuscarFechas = (e) => {
    e.preventDefault();
    // Filtramos los trabajadores por el rango de fechas
    const filtered = trabajadoresData.filter((trabajador) => {
      return (
        new Date(trabajador.ultimoAcceso) >= new Date(desde) &&
        new Date(trabajador.ultimoAcceso) <= new Date(hasta)
      );
    });
    setFilteredTrabajadores(filtered);
  };

  const mostrarTodos = () => {
    setFilteredTrabajadores(trabajadoresData);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="portlet light">
          <div className="portlet-title">
            <div className="caption">
              <i className="icon-users font-blue-dark"></i>
              <span className="caption-subject font-blue-dark bold uppercase">Trabajadores</span>
              <span className="caption-helper">Gestión de trabajadores</span>
            </div>
            <div className="actions">
              <button className="btn btn-circle btn-default">
                <i className="fa fa-plus"></i>
                <span className="hidden-480">Añadir Trabajador</span>
              </button>
            </div>
          </div>
          <div className="portlet-body form">
            <div className="row">
              <div className="col-md-3 col-md-offset-1" align="center">
                <br />
                <b>
                  <h4>Búsqueda último acceso :</h4>
                </b>
              </div>
              <form id="fechas" onSubmit={handleBuscarFechas}>
                <div className="col-md-2" align="center">
                  <label htmlFor="desde">DESDE</label>
                  <input
                    id="desde"
                    type="date"
                    className="form-control"
                    value={desde}
                    onChange={(e) => setDesde(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-2" align="center">
                  <label htmlFor="hasta">HASTA</label>
                  <input
                    id="hasta"
                    type="date"
                    className="form-control"
                    value={hasta}
                    onChange={(e) => setHasta(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-1" align="center">
                  <br />
                  <button type="submit" className="btn btn-info">
                    Buscar
                  </button>
                </div>
              </form>
              <div className="col-md-1" align="center">
                <br />
                <button onClick={mostrarTodos} className="btn btn-info">
                  Mostrar Todos
                </button>
              </div>
            </div>
            <br />
            <div className="table-scrollable table-scrollable-borderless table-scrollable-scroll">
              <table className="table-responsive table table-striped table-condensed table-bordered table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Último Acceso</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>DNI</th>
                    <th>Num. Accesos</th>
                    <th>Num. Usos</th>
                    <th>Estado</th>
                    <th>Borrado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTrabajadores.length > 0 ? (
                    filteredTrabajadores.map((trabajador) => (
                      <tr key={trabajador.id}>
                        <td>{trabajador.id}</td>
                        <td>{trabajador.ultimoAcceso}</td>
                        <td>{trabajador.nombre}</td>
                        <td>{trabajador.apellidos}</td>
                        <td>{trabajador.dni}</td>
                        <td>{trabajador.numAccesos}</td>
                        <td>{trabajador.numUsos}</td>
                        <td>{trabajador.estado}</td>
                        <td>{trabajador.borrado ? "Sí" : "No"}</td>
                        <td>
                          <button className="btn btn-sm btn-primary">Editar</button>
                          <button className="btn btn-sm btn-danger">Eliminar</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" align="center">No hay trabajadores disponibles</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabajadores;

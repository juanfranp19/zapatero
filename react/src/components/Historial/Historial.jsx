import React, { useState } from 'react';

const Historial = () => {
  const [fechaDesde, setFechaDesde] = useState('');
  const [fechaHasta, setFechaHasta] = useState('');
  const [historicoDatos, setHistoricoDatos] = useState([]);

  // Simulamos algunos datos de historial
  const mockHistorial = [
    { id: 1, equipo: 'Equipo 1', uso: '10 horas', fecha: '2025-03-30' },
    { id: 2, equipo: 'Equipo 2', uso: '5 horas', fecha: '2025-03-28' },
    { id: 3, equipo: 'Equipo 3', uso: '12 horas', fecha: '2025-03-25' },
  ];

  // Función para manejar la búsqueda por fechas
  const buscarFechas = (e) => {
    e.preventDefault();
    // Lógica de búsqueda basada en las fechas seleccionadas
    const filteredData = mockHistorial.filter(
      (item) =>
        new Date(item.fecha) >= new Date(fechaDesde) &&
        new Date(item.fecha) <= new Date(fechaHasta)
    );
    setHistoricoDatos(filteredData);
  };

  return (
    <div className="col-md-12">
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-paper-clip font-blue-dark"></i>
            <span className="caption-subject font-blue-dark bold uppercase">
              Historial
            </span>
            <span className="caption-helper">de uso de los equipos</span>
          </div>
        </div>
        <div className="portlet-body">
          {/* BEGIN 'BUSQUEDA POR FECHA' */}
          <div className="row">
            <div className="col-md-4" align="right"></div>
            <div className="col-md-2" align="center">
              <h5>DESDE</h5>
            </div>
            <div className="col-md-2" align="center">
              <h5>HASTA</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4" align="right">
              <b>
                <h4>Búsqueda por fecha :</h4>
              </b>
            </div>
            <form id="fechas" className="ng-pristine ng-valid" onSubmit={buscarFechas}>
              <div className="col-md-2" align="center">
                <input
                  type="date"
                  className="form-control datepicker ng-pristine ng-untouched ng-valid"
                  value={fechaDesde}
                  onChange={(e) => setFechaDesde(e.target.value)}
                  style={{ width: '160px' }}
                  required
                />
              </div>
              <div className="col-md-2" align="center">
                <input
                  type="date"
                  className="form-control datepicker ng-pristine ng-untouched ng-valid"
                  value={fechaHasta}
                  onChange={(e) => setFechaHasta(e.target.value)}
                  style={{ width: '160px' }}
                  required
                />
              </div>
              <div className="col-md-1">
                <button type="submit" className="btn btn-info">
                  Buscar
                </button>
              </div>
            </form>
          </div>
          <br />
          {/* END 'BUSQUEDA POR FECHA' */}

          {/* Tabla de historial */}
          <div className="table-scrollable table-scrollable-borderless table-scrollable-scroll">
            <table className="table table-striped table-condensed table-bordered table-hover">
              <thead>
                <tr>
                  <th>Equipo</th>
                  <th>Uso</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {historicoDatos.length > 0 ? (
                  historicoDatos.map((item) => (
                    <tr key={item.id}>
                      <td>{item.equipo}</td>
                      <td>{item.uso}</td>
                      <td>{item.fecha}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" align="center">
                      No se encontraron registros
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historial;

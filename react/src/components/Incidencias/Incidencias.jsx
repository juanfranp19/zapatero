import React, { useState } from 'react';

const Incidencias = () => {
  // Datos simulados de incidencias (puedes reemplazarlos con datos reales de una API)
  const [incidencias, setIncidencias] = useState([
    { trabajador: 'Juan Pérez', equipo: 'Equipo A', fecha: '2023-04-25', descripcion: 'Falla en el motor', tiempo: '2h 30m' },
    { trabajador: 'María García', equipo: 'Equipo B', fecha: '2023-04-26', descripcion: 'Problema eléctrico', tiempo: '1h 15m' },
    { trabajador: 'Carlos Ruiz', equipo: 'Equipo C', fecha: '2023-04-27', descripcion: 'Rendimiento bajo', tiempo: '3h' },
  ]);

  const [search, setSearch] = useState('');
  const [sortKeyInc, setSortKeyInc] = useState('trabajador');
  const [reverseInc, setReverseInc] = useState(false);

  // Filtrar y ordenar las incidencias
  const filteredIncidencias = incidencias
    .filter((incidencia) =>
      incidencia.trabajador.toLowerCase().includes(search.toLowerCase()) ||
      incidencia.equipo.toLowerCase().includes(search.toLowerCase()) ||
      incidencia.descripcion.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKeyInc === 'trabajador' || sortKeyInc === 'equipo' || sortKeyInc === 'descripcion') {
        return reverseInc
          ? a[sortKeyInc].localeCompare(b[sortKeyInc])
          : b[sortKeyInc].localeCompare(a[sortKeyInc]);
      } else if (sortKeyInc === 'fechaIncidencia') {
        return reverseInc
          ? new Date(a.fecha) - new Date(b.fecha)
          : new Date(b.fecha) - new Date(a.fecha);
      } else if (sortKeyInc === 'tiempoIncidencia') {
        const convertToMinutes = (time) => {
          const [hours, minutes] = time.split('h').map((t) => t.trim());
          return parseInt(hours) * 60 + (parseInt(minutes) || 0);
        };
        const aTime = convertToMinutes(a.tiempo);
        const bTime = convertToMinutes(b.tiempo);
        return reverseInc ? aTime - bTime : bTime - aTime;
      }
    });

  // Cambiar el valor de búsqueda
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Cambiar el criterio de ordenación
  const handleSort = (key) => {
    if (key === sortKeyInc) {
      setReverseInc(!reverseInc);
    } else {
      setSortKeyInc(key);
      setReverseInc(false);
    }
  };

  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption caption-md">
          <i className="icon-bar-chart theme-font hide"></i>
          <span className="caption-subject theme-font bold uppercase">Incidencias</span>
        </div>
      </div>
      <div className="portlet-body">
        <div className="table-scrollable table-scrollable-borderless table-scrollable-scroll">
          <table className="table table-hover table-light">
            <thead>
              <tr className="uppercase">
                <th onClick={() => handleSort('trabajador')}>
                  Trabajador{' '}
                  <span
                    className={`glyphicon sort-icon ${reverseInc ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                  />
                </th>
                <th onClick={() => handleSort('equipo')}>
                  Equipo{' '}
                  <span
                    className={`glyphicon sort-icon ${reverseInc ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                  />
                </th>
                <th onClick={() => handleSort('fechaIncidencia')}>
                  Fecha{' '}
                  <span
                    className={`glyphicon sort-icon ${reverseInc ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                  />
                </th>
                <th onClick={() => handleSort('tipo_incidencia_descripcion')}>
                  Descripción{' '}
                  <span
                    className={`glyphicon sort-icon ${reverseInc ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                  />
                </th>
                <th onClick={() => handleSort('tiempoIncidencia')} style={{ float: 'right' }}>
                  Tiempo{' '}
                  <span
                    className={`glyphicon sort-icon ${reverseInc ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredIncidencias.map((incidencia, index) => (
                <tr key={index}>
                  <td>{incidencia.trabajador}</td>
                  <td>{incidencia.equipo}</td>
                  <td>{incidencia.fecha}</td>
                  <td>{incidencia.descripcion}</td>
                  <td>{incidencia.tiempo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Incidencias;

/*
import React, { useState, useEffect } from 'react';

const EstadisticasDeUso = () => {
  const [selectedOption, setSelectedOption] = useState('Hoy');
  const [chartData, setChartData] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  // Función para realizar la llamada a la API y obtener los datos
  const fetchData = async () => {
    try {
      const response = await fetch(`API_ENDPOINT?option=${selectedOption}`);  // Ajusta el endpoint y los parámetros según sea necesario
      const data = await response.json();

      // Asumiendo que la API devuelve un objeto con días y valores, ejemplo:
      // { "Lun": 20, "Mar": 30, "Mié": 40, "Jue": 50, "Vie": 60 }
      const formattedData = Object.keys(data).map(day => ({
        day: day,
        value: data[day]
      }));

      setChartData(formattedData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Realiza la llamada a la API cada vez que la opción seleccionada cambie
  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  // Inicializamos el gráfico de Morris cada vez que los datos cambian
  useEffect(() => {
    if (chartData.length > 0) {
      new Morris.Line({
        element: 'sales_statistics',
        data: chartData,
        xkey: 'day', // La propiedad para el eje X
        ykeys: ['value'], // La propiedad para el eje Y
        labels: ['Valor'], // Las etiquetas de la línea
        lineColors: ['#1e88e5'], // Color de la línea
        resize: true
      });
    }
  }, [chartData]); // Esto se ejecuta cada vez que chartData cambia

  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption caption-md">
          <i className="icon-bar-chart theme-font hide"></i>
          <span className="caption-subject theme-font bold uppercase">Estadísticas de uso</span>
          <span className="caption-helper hide">frente a incidencias...</span>
        </div>
        <div className="actions">
          <div className="btn-group btn-group-devided" data-toggle="buttons">
            <label className={`btn btn-transparent grey-salsa btn-circle btn-sm ${selectedOption === 'Hoy' ? 'active' : ''}`}>
              <input type="radio" name="options" className="toggle" id="Hoy" onChange={handleOptionChange} checked={selectedOption === 'Hoy'} />
              Hoy
            </label>
            <label className={`btn btn-transparent grey-salsa btn-circle btn-sm ${selectedOption === 'Semana' ? 'active' : ''}`}>
              <input type="radio" name="options" className="toggle" id="Semana" onChange={handleOptionChange} checked={selectedOption === 'Semana'} />
              Semana
            </label>
            <label className={`btn btn-transparent grey-salsa btn-circle btn-sm ${selectedOption === 'Mes' ? 'active' : ''}`}>
              <input type="radio" name="options" className="toggle" id="Mes" onChange={handleOptionChange} checked={selectedOption === 'Mes'} />
              Mes
            </label>
          </div>
        </div>
      </div>
      <div className="portlet-body">
        <div className="row list-separated">
          <div className="col-md-offset-3 col-md-3 col-sm-6 col-xs-6">
            <div className="font-grey-mint font-sm">Usos</div>
            <div className="uppercase font-hg font-green-soft ng-binding">
              {selectedOption === 'Hoy' && 'Valor para hoy'}
              {selectedOption === 'Semana' && 'Valor para esta semana'}
              {selectedOption === 'Mes' && 'Valor para este mes'}
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="font-grey-mint font-sm">Incidencias</div>
            <div className="uppercase font-hg theme-font ng-binding">
              {selectedOption === 'Hoy' && 'Incidencias de hoy'}
              {selectedOption === 'Semana' && 'Incidencias de la semana'}
              {selectedOption === 'Mes' && 'Incidencias del mes'}
            </div>
          </div>
        </div>
        <div id="sales_statistics" className="portlet-body-morris-fit morris-chart" style={{ height: '260px' }} />
      </div>
    </div>
  );
};

export default EstadisticasDeUso;

*/
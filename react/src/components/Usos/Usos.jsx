import React, { useState, useEffect } from 'react';

const Usos = () => {
  const [usos, setUsos] = useState([]);
  const [search, setSearch] = useState('');
  const [sortKeyUso, setSortKeyUso] = useState('trabajador');
  const [reverseUso, setReverseUso] = useState(false);

  // Simulación de carga de datos (esto se puede sustituir por una llamada API)
  useEffect(() => {
    const mockData = [
      { trabajador: 'Juan Pérez', equipo: 'Máquina A', fechaUso: '2025-04-01' },
      { trabajador: 'Ana Gómez', equipo: 'Máquina B', fechaUso: '2025-03-30' },
      { trabajador: 'Carlos López', equipo: 'Máquina C', fechaUso: '2025-03-29' },
    ];
    setUsos(mockData);
  }, []);

  // Manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Manejar la ordenación
  const handleSortUso = (key) => {
    if (key === sortKeyUso) {
      setReverseUso(!reverseUso);
    } else {
      setSortKeyUso(key);
      setReverseUso(false);
    }
  };

  // Filtrado de los datos basado en la búsqueda
  const filteredUsos = usos
    .filter((uso) =>
      uso.trabajador.toLowerCase().includes(search.toLowerCase()) ||
      uso.equipo.toLowerCase().includes(search.toLowerCase()) ||
      uso.fechaUso.includes(search)
    )
    .sort((a, b) => {
      if (reverseUso) {
        return a[sortKeyUso] < b[sortKeyUso] ? 1 : -1;
      }
      return a[sortKeyUso] > b[sortKeyUso] ? 1 : -1;
    });

  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption caption-md">
          <i className="icon-bar-chart theme-font hide"></i>
          <span className="caption-subject theme-font bold uppercase">Usos</span>
        </div>
      </div>
      <div className="portlet-body">
        <div className="table-scrollable table-scrollable-borderless">
          <form className="form-inline">
            <div className="form-group">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                className="form-control"
                placeholder="Buscar trabajador, equipo o fecha"
              />
            </div>
          </form>
          <br />
          <table className="table table-hover table-light">
            <thead>
              <tr className="uppercase">
                <th onClick={() => handleSortUso('trabajador')}>
                  Trabajador{' '}
                  <span className={`glyphicon sort-icon ${reverseUso ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
                </th>
                <th onClick={() => handleSortUso('equipo')}>
                  Equipo{' '}
                  <span className={`glyphicon sort-icon ${reverseUso ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
                </th>
                <th onClick={() => handleSortUso('fechaUso')}>
                  Fecha{' '}
                  <span className={`glyphicon sort-icon ${reverseUso ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsos.map((uso, index) => (
                <tr key={index}>
                  <td>{uso.trabajador}</td>
                  <td>{uso.equipo}</td>
                  <td>{uso.fechaUso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usos;

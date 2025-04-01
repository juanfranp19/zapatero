import React, { useState, useEffect } from 'react';

const AccesosDenegados = () => {
  const [accesosDenegados, setAccesosDenegados] = useState([]);
  const [search, setSearch] = useState('');
  const [sortKeyInc, setSortKeyInc] = useState('trabajador');
  const [reverseInc, setReverseInc] = useState(false);

  // Simulación de carga de datos (esto se puede reemplazar con una llamada API)
  useEffect(() => {
    const mockData = [
      { trabajador: 'Juan Pérez', equipo: 'Máquina A', fechaUso: '2025-04-01' },
      { trabajador: 'Ana Gómez', equipo: 'Máquina B', fechaUso: '2025-03-30' },
      { trabajador: 'Carlos López', equipo: 'Máquina C', fechaUso: '2025-03-29' },
    ];
    setAccesosDenegados(mockData);
  }, []);

  // Manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Manejar la ordenación
  const handleSortInc = (key) => {
    if (key === sortKeyInc) {
      setReverseInc(!reverseInc);
    } else {
      setSortKeyInc(key);
      setReverseInc(false);
    }
  };

  // Filtrar y ordenar los accesos denegados
  const filteredAccesos = accesosDenegados
    .filter((acceso) =>
      acceso.trabajador.toLowerCase().includes(search.toLowerCase()) ||
      acceso.equipo.toLowerCase().includes(search.toLowerCase()) ||
      acceso.fechaUso.includes(search)
    )
    .sort((a, b) => {
      if (reverseInc) {
        return a[sortKeyInc] < b[sortKeyInc] ? 1 : -1;
      }
      return a[sortKeyInc] > b[sortKeyInc] ? 1 : -1;
    });

  return (
    <div className="portlet light height600">
      <div className="portlet-title">
        <div className="caption caption-md">
          <i className="icon-bar-chart theme-font hide"></i>
          <span className="caption-subject theme-font bold uppercase">Accesos Denegados</span>
        </div>
      </div>
      <div className="table-scrollable table-scrollable-borderless table-scrollable-scroll">
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
              <th onClick={() => handleSortInc('trabajador')}>
                Trabajador{' '}
                <span
                  className={`glyphicon sort-icon ${reverseInc ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                />
              </th>
              <th onClick={() => handleSortInc('equipo')}>
                Equipo{' '}
                <span
                  className={`glyphicon sort-icon ${reverseInc ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                />
              </th>
              <th onClick={() => handleSortInc('fechaUso')}>
                Fecha{' '}
                <span
                  className={`glyphicon sort-icon ${reverseInc ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAccesos.map((acceso, index) => (
              <tr key={index}>
                <td>{acceso.trabajador}</td>
                <td>{acceso.equipo}</td>
                <td>{acceso.fechaUso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccesosDenegados;

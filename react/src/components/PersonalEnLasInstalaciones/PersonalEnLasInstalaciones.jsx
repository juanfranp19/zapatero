import React, { useState, useEffect } from 'react';
import Sparkline from 'react-sparkline';

const PersonalEnLasInstalaciones = () => {
  const [search, setSearch] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [totalPersonal, setTotalPersonal] = useState(0);
  const [trabajando, setTrabajando] = useState(0);
  const [sortKey, setSortKey] = useState('id');
  const [reverse, setReverse] = useState(false);

  // Simulando una llamada a una API o datos estáticos
  useEffect(() => {
    // Aquí puedes colocar tu lógica para obtener los datos desde una API
    const mockData = [
      { id: 1, nombre: 'Juan Pérez', apellidos: 'Pérez Rodríguez', activo: 'Sí' },
      { id: 2, nombre: 'Ana Gómez', apellidos: 'Gómez Martínez', activo: 'No' },
      { id: 3, nombre: 'Carlos López', apellidos: 'López García', activo: 'Sí' },
    ];

    setUsuarios(mockData);
    setTotalPersonal(mockData.length);
    setTrabajando(mockData.filter((user) => user.activo === 'Sí').length);
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (key) => {
    setSortKey(key);
    setReverse(!reverse);
  };

  const filteredUsuarios = usuarios.filter((user) => {
    return user.nombre.toLowerCase().includes(search.toLowerCase()) || user.apellidos.toLowerCase().includes(search.toLowerCase());
  }).sort((a, b) => {
    if (reverse) {
      return a[sortKey] < b[sortKey] ? 1 : -1;
    }
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption caption-md">
          <i className="icon-bar-chart theme-font hide"></i>
          <span className="caption-subject theme-font bold uppercase">Personal en las instalaciones</span>
        </div>
      </div>

      <div className="portlet-body">
        <div className="row number-stats margin-bottom-30">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="stat-left">
              <div className="stat-chart">
                <div id="sparkline_bar">
                  {/* Simulando un gráfico con Sparkline */}
                  <Sparkline data={[5, 6, 7, 8, 9, 10]} />
                </div>
              </div>
              <div className="stat-number">
                <div className="title">Total</div>
                <div className="number">{totalPersonal}</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="stat-right">
              <div className="stat-chart">
                <div id="sparkline_bar2">
                  {/* Otro gráfico simulando el número de personas trabajando */}
                  <Sparkline data={[3, 4, 5, 6, 7]} />
                </div>
              </div>
              <div className="stat-number">
                <div className="title">Trabajando</div>
                <div className="number">{trabajando}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="table-scrollable table-scrollable-borderless">
          <form className="form-inline">
            <div className="form-group">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                className="form-control"
                placeholder="Buscar trabajador"
              />
            </div>
          </form>
          <br />
          <table className="table table-hover table-light">
            <thead>
              <tr className="uppercase">
                <th onClick={() => handleSort('id')}>
                  Id{' '}
                  <span className={`glyphicon sort-icon ${reverse ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
                </th>
                <th onClick={() => handleSort('nombre')}>
                  Nombre{' '}
                  <span className={`glyphicon sort-icon ${reverse ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
                </th>
                <th onClick={() => handleSort('apellidos')}>
                  Apellidos{' '}
                  <span className={`glyphicon sort-icon ${reverse ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
                </th>
                <th onClick={() => handleSort('activo')}>
                  Activo{' '}
                  <span className={`glyphicon sort-icon ${reverse ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsuarios.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nombre}</td>
                  <td>{user.apellidos}</td>
                  <td>{user.activo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonalEnLasInstalaciones;

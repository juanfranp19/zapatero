import React, { useState } from 'react';

const EquiposReparacion = () => {
  // Datos de equipos en reparación simulados (puedes sustituir esto por datos de una API real)
  const [equiposReparacion, setEquiposReparacion] = useState([
    { alias: 'Equipo A', horas: 100, minutos: 50 },
    { alias: 'Equipo B', horas: 200, minutos: 30 },
    { alias: 'Equipo C', horas: 150, minutos: 10 },
  ]);

  const [search, setSearch] = useState('');
  const [sortKeyEqIn, setSortKeyEqIn] = useState('alias');
  const [reverseEqIn, setReverseEqIn] = useState(false);

  // Filtrar los equipos en reparación basados en la búsqueda
  const filteredEquiposReparacion = equiposReparacion
    .filter((equipo) =>
      equipo.alias.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKeyEqIn === 'alias') {
        return reverseEqIn
          ? a.alias.localeCompare(b.alias)
          : b.alias.localeCompare(a.alias);
      } else {
        const aTotalMinutos = a.horas * 60 + a.minutos;
        const bTotalMinutos = b.horas * 60 + b.minutos;
        return reverseEqIn ? aTotalMinutos - bTotalMinutos : bTotalMinutos - aTotalMinutos;
      }
    });

  // Manejar la búsqueda
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Cambiar el criterio de ordenación
  const handleSort = (key) => {
    if (key === sortKeyEqIn) {
      setReverseEqIn(!reverseEqIn);
    } else {
      setSortKeyEqIn(key);
      setReverseEqIn(false);
    }
  };

  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption caption-md">
          <i className="icon-bar-chart theme-font hide"></i>
          <span className="caption-subject theme-font bold uppercase">Equipos en Reparación</span>
        </div>
      </div>
      <div className="portlet-body">
        <div className="table-scrollable table-scrollable-borderless table-scrollable-scroll">
          <table className="table table-hover table-light">
            <thead>
              <tr className="uppercase">
                <th onClick={() => handleSort('alias')}>
                  Equipo{' '}
                  <span
                    className={`glyphicon sort-icon ${reverseEqIn ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                  />
                </th>
                <th onClick={() => handleSort('horas')}>
                  Horas de uso{' '}
                  <span
                    className={`glyphicon sort-icon ${reverseEqIn ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}
                  />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredEquiposReparacion.map((equipo, index) => (
                <tr key={index}>
                  <td>{equipo.alias}</td>
                  <td>{equipo.horas}h {equipo.minutos}m</td>
                  <td>
                    {/* Aquí puedes agregar botones de acción, como editar o eliminar */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EquiposReparacion;

import React, { useState, useEffect } from 'react';

const EquiposActivos = () => {
  // Datos de equipos activos simulados (esto puede ser reemplazado por una API real)
  const [equiposActivos, setEquiposActivos] = useState([
    { alias: 'Equipo A', horas: 150, minutos: 30 },
    { alias: 'Equipo B', horas: 200, minutos: 45 },
    { alias: 'Equipo C', horas: 120, minutos: 15 },
  ]);

  const [search, setSearch] = useState('');
  const [sortKeyEqAct, setSortKeyEqAct] = useState('alias');
  const [reverseEqAct, setReverseEqAct] = useState(false);

  // Filtrar los equipos basados en la búsqueda
  const filteredEquipos = equiposActivos
    .filter((equipo) =>
      equipo.alias.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKeyEqAct === 'alias') {
        return reverseEqAct
          ? a.alias.localeCompare(b.alias)
          : b.alias.localeCompare(a.alias);
      } else {
        const aTotalMinutos = a.horas * 60 + a.minutos;
        const bTotalMinutos = b.horas * 60 + b.minutos;
        return reverseEqAct ? aTotalMinutos - bTotalMinutos : bTotalMinutos - aTotalMinutos;
      }
    });

  // Manejar la búsqueda
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Cambiar el criterio de ordenación
  const handleSort = (key) => {
    if (key === sortKeyEqAct) {
      setReverseEqAct(!reverseEqAct);
    } else {
      setSortKeyEqAct(key);
      setReverseEqAct(false);
    }
  };

  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption caption-md">
          <i className="icon-bar-chart theme-font hide"></i>
          <span className="caption-subject theme-font bold uppercase">Equipos Activos</span>
        </div>
      </div>
      <div className="portlet-body">
        <div className="table-scrollable table-scrollable-borderless table-scrollable-scroll">
          <table className="table table-hover table-light">
            <thead>
              <tr className="uppercase">
                <th onClick={() => handleSort('alias')}>
                  Equipo{' '}
                  <span className={`glyphicon sort-icon ${reverseEqAct ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
                </th>
                <th onClick={() => handleSort('horas')}>
                  Horas de uso{' '}
                  <span className={`glyphicon sort-icon ${reverseEqAct ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredEquipos.map((equipo, index) => (
                <tr key={index}>
                  <td>{equipo.alias}</td>
                  <td>{equipo.horas}h {equipo.minutos}m</td>
                  <td>
                    {/* Aquí puedes añadir botones de acción, como editar o eliminar */}
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

export default EquiposActivos;

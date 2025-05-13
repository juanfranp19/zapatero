import React from 'react';
import TablaSeccion from '../TablaSeccion/TablaSeccion';
import EntradaSeccion from '../EntradaSeccion/EntradaSeccion';

const PanelControlSeccion = () => {
  const permisosData = [
    {
      name: 'Equipo en la entrada',
      usos: 2,
      fecha: '18/02/2015 11:05',
      link: 'equipos-historial.html'
    },
    {
      name: 'Tractor #1',
      usos: 2,
      fecha: '18/02/2015 11:05',
      link: 'equipos-historial.html'
    }
  ];

  const accesosData = [
    {
      description: (
        <a className="primary-link" href="equipos-historial.html">
          Equipo en la entrada
        </a>
      ),
      date: '10:05'
    },
    {
      description: (
        <a className="primary-link" href="equipos-historial.html">
          Equipo en la entrada
        </a>
      ),
      date: '18/02/15'
    }
  ];

  const usosData = [
    {
      description: (
        <a className="primary-link" href="equipos-historial.html" target="_blank" rel="noreferrer">
          Tractor #1
        </a>
      ),
      date: '11:05'
    },
    {
      description: (
        <a className="primary-link" href="equipos-historial.html" target="_blank" rel="noreferrer">
          Tractor #1
        </a>
      ),
      date: '18/02/15'
    }
  ];

  const incidenciasData = [
    {
      description: (
        <>
          No tiene acceso al equipo.{' '}
          <span className="label label-sm label-info">
            <a style={{ color: 'white' }} href="equipos-historial.html" target="_blank" rel="noreferrer">
              Tractor #1
            </a>
          </span>
        </>
      ),
      date: '18/02/15'
    },
    {
      description: (
        <>
          No tiene acceso al equipo.{' '}
          <span className="label label-sm label-info">
            <a style={{ color: 'white' }} href="equipos-historial.html" target="_blank" rel="noreferrer">
              Tractor #1
            </a>
          </span>
        </>
      ),
      date: '18/02/15'
    }
  ];

  return (
     <div className="profile-content">
        <div className="row componente-inicio">
          <TablaSeccion title="Permisos" data={permisosData} />
          <EntradaSeccion title="Accesos" items={accesosData} />
        </div>
        <div className="row componente-inicio">
          <EntradaSeccion title="Usos" items={usosData} />
          <EntradaSeccion title="Incidencias" items={incidenciasData} />
        </div>
      </div>
  );
};

export default PanelControlSeccion;

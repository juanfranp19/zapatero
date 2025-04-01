import React, { useState, useEffect } from 'react';

const ParametrosEficacia = () => {
  // Estado para almacenar los parámetros de eficacia
  const [parametrosEficacia, setParametrosEficacia] = useState([]);

  // Simulación de la carga de datos (esto puede ser reemplazado por una llamada a una API)
  useEffect(() => {
    // Esta es una simulación de los datos, que en la práctica vendrían de una API
    const datosEjemplo = [
      { id: 1, nombre: 'Eficacia A', descripcion: 'Descripción del parámetro A', valor: '80%' },
      { id: 2, nombre: 'Eficacia B', descripcion: 'Descripción del parámetro B', valor: '90%' },
      { id: 3, nombre: 'Eficacia C', descripcion: 'Descripción del parámetro C', valor: '85%' },
    ];
    setParametrosEficacia(datosEjemplo);
  }, []);

  return (
    <div className="col-md-12">
      {/* Comienzo del contenedor principal */}
      <div className="portlet light">
        {/* Título de la sección */}
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-close font-blue-dark"></i>
            <span className="caption-subject font-blue-dark bold uppercase">Parámetros de Eficacia</span>
            <span className="caption-helper">Gestión de los parámetros de eficacia de los equipos</span>
          </div>
        </div>

        {/* Cuerpo de la sección */}
        <div className="portlet-body">
          {/* Tabla de parámetros de eficacia */}
          <div className="table-scrollable table-scrollable-borderless table-scrollable-scroll">
            <table className="table table-striped table-condensed table-bordered table-scrollable-scroll">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {/* Mapeo de los parámetros de eficacia */}
                {parametrosEficacia.map((parametro) => (
                  <tr key={parametro.id}>
                    <td>{parametro.nombre}</td>
                    <td>{parametro.descripcion}</td>
                    <td>{parametro.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Fin del contenedor principal */}
    </div>
  );
};

export default ParametrosEficacia;

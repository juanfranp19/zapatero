import React, { useState } from 'react';

const EstadoEquipos = () => {
  // Establecer estados iniciales para los equipos
  const [equiposActivos, setEquiposActivos] = useState(10); // Simulación de número de equipos activos
  const [equiposInactivos, setEquiposInactivos] = useState(5); // Simulación de equipos inactivos
  const [equiposReparacion, setEquiposReparacion] = useState(2); // Simulación de equipos en reparación

  return (
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="portlet light">
          <div className="portlet-title">
            <div className="caption caption-md">
              <i className="icon-bar-chart theme-font hide"></i>
              <span className="caption-subject theme-font bold uppercase">ESTADO DE LOS EQUIPOS</span>
            </div>
          </div>
          <div className="portlet-body">
            <div className="row list-separated">
              <div className="col-md-4 col-sm-4 col-xs-4" style={{ textAlign: 'center' }}>
                <div className="uppercase font-hg ng-binding">
                  <strong>Activos:</strong> {equiposActivos}
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4" style={{ textAlign: 'center' }}>
                <div className="uppercase font-hg ng-binding">
                  <strong>Inactivos:</strong> {equiposInactivos}
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4" style={{ textAlign: 'center' }}>
                <div className="uppercase font-hg ng-binding">
                  <strong>Reparación:</strong> {equiposReparacion}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstadoEquipos;

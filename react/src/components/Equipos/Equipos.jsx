import React from 'react';

const Equipos = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        {/* Begin: life time stats */}
        <div className="portlet light">
          <div className="portlet-title">
            <div className="caption">
              <i className="icon-wrench font-blue-dark"></i>
              <span className="caption-subject font-blue-dark bold uppercase">Equipos</span>
              <span className="caption-helper">Gestión de equipos</span>
            </div>
            <div className="actions">
              {/* Aquí se pueden agregar acciones, según lo que se necesite */}
            </div>
          </div>
          <div className="portlet-body form">
            {/* Este es el cuerpo del portlet donde se puede agregar contenido */}
            <p>Contenido relacionado con la gestión de equipos.</p>
            {/* Puedes agregar más contenido aquí como una lista de equipos o tablas */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipos;

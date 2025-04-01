import React, { useState } from 'react';

const TiposIncidencias = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleExport = (type) => {
    console.log(`Exporting as ${type}`);
    // Aquí puedes agregar la lógica para exportar a Excel o CSV
  };

  return (
    <div className="col-md-12">
      {/* Begin: life time stats */}
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-close font-blue-dark"></i>
            <span className="caption-subject font-blue-dark bold uppercase">
              Tipos de Incidencias
            </span>
            <span className="caption-helper">Gestión de los tipos de incidencias</span>
          </div>
          <div className="actions">
            <div className="btn-group">
              <button
                className="btn btn-default btn-circle"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                <i className="fa fa-share"></i> <span className="hidden-480"> Herramientas </span>
                <i className="fa fa-angle-down"></i>
              </button>
              {dropdownOpen && (
                <ul className="dropdown-menu pull-right">
                  <li>
                    <button onClick={() => handleExport('Excel')}>Exportar a Excel</button>
                  </li>
                  <li>
                    <button onClick={() => handleExport('CSV')}>Exportar a CSV</button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="portlet-body">
          {/* Aquí puedes agregar el contenido o una tabla de tipos de incidencias */}
          <p>Contenido de gestión de tipos de incidencias</p>
        </div>
      </div>
      {/* End: life time stats */}
    </div>
  );
};

export default TiposIncidencias;

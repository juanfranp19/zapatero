import React, { useState } from 'react';

const CrearPermiso = () => {
  // Estado para manejar los valores del formulario
  const [permiso, setPermiso] = useState({
    equipo: '',
    desde: '',
    hasta: '',
    periodoUso: '',
    numUsos: '',
  });

  const [equipos, setEquipos] = useState([
    { alias: 'Equipo 1', id: 1 },
    { alias: 'Equipo 2', id: 2 },
    { alias: 'Equipo 3', id: 3 },
  ]);

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPermiso((prevPermiso) => ({
      ...prevPermiso,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Permiso creado:', permiso);
    // Aquí puedes agregar la lógica para guardar el permiso
  };

  return (
    <div className="page-content">
      <div className="container">
        {/* Breadcrumbs */}
        <ul className="page-breadcrumb breadcrumb">
          <li>
            <a href="#" onClick={() => console.log('Redirigir a inicio')}>Inicio</a>
            <i className="fa fa-circle"></i>
          </li>
          <li>
            <a href="#" onClick={() => console.log('Redirigir a permisos')}>Permisos</a>
            <i className="fa fa-circle"></i>
          </li>
          <li className="active">Crear Permiso</li>
        </ul>

        {/* Portlet para crear permisos */}
        <div className="portlet light">
          <div className="portlet-title">
            <div className="caption">
              <i className="icon-users font-blue-dark"></i>
              <span className="caption-subject font-blue-dark bold uppercase">Permisos</span>
              <span className="caption-helper">Creación de permisos</span>
            </div>
          </div>
          <div className="portlet-body form">
            <form className="horizontal-form" onSubmit={handleSubmit}>
              <div className="form-body">
                {/* Sección de Equipos */}
                <h3 className="form-section">Equipos</h3>
                <div className="row">
                  <div className="col-md-6" align="center">
                    <div className="form-group">
                      <select
                        name="equipo"
                        className="form-control select2"
                        value={permiso.equipo}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Seleccionar equipo</option>
                        {equipos.map((equipo) => (
                          <option key={equipo.id} value={equipo.id}>
                            {equipo.alias}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Sección de Permiso */}
                <h3 className="form-section">Permiso</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group col-md-3">
                        <label className="control-label">Desde</label>
                        <input
                          type="date"
                          name="desde"
                          className="form-control datepicker"
                          value={permiso.desde}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group col-md-3">
                        <label className="control-label">Hasta</label>
                        <input
                          type="date"
                          name="hasta"
                          className="form-control datepicker"
                          value={permiso.hasta}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group col-md-3">
                        <label className="control-label">Periodo Uso</label>
                        <input
                          type="number"
                          name="periodoUso"
                          className="form-control"
                          placeholder="Nº horas disponibles"
                          value={permiso.periodoUso}
                          onChange={handleInputChange}
                          min="0"
                        />
                      </div>
                      <div className="form-group col-md-3">
                        <label className="control-label">Nº Usos</label>
                        <input
                          type="number"
                          name="numUsos"
                          className="form-control"
                          placeholder="Usos"
                          value={permiso.numUsos}
                          onChange={handleInputChange}
                          min="0"
                          step="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de guardar */}
              <div className="form-actions right">
                <button type="submit" className="btn blue-dark">
                  <i className="fa fa-check"></i>Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearPermiso;

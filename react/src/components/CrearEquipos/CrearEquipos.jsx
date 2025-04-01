import React, { useState } from 'react';

const CrearEquipos = () => {
  // State para manejar los valores del formulario
  const [equipo, setEquipo] = useState({
    permiso: {
      desde: '',
      hasta: '',
      periodoUso: 0,
      numUsos: 0,
    },
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipo((prevEquipo) => ({
      ...prevEquipo,
      permiso: {
        ...prevEquipo.permiso,
        [name]: value,
      },
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', equipo);
    // Aquí puedes añadir la lógica para guardar el equipo
  };

  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption">
          <i className="icon-users font-blue-dark"></i>
          <span className="caption-subject font-blue-dark bold uppercase">Equipos</span>
          <span className="caption-helper">Gestión de equipos</span>
        </div>
      </div>
      <div className="portlet-body form">
        {/* Comienzo del formulario */}
        <form name="addEquipo" className="horizontal-form" onSubmit={handleSubmit}>
          <div className="form-body">
            <h3 className="form-section">Permisos</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group" style={{ height: '180px', overflowY: 'scroll' }}>
                  {/* Este sería el select para mostrar los trabajadores (comentado en el original) */}
                  {/* <select multiple="multiple" className="form-control select2" style={{ height: '180px' }}>
                    <option>Trabajador 1</option>
                    <option>Trabajador 2</option>
                  </select> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">Desde</label>
                    <input
                      type="date"
                      className="form-control"
                      name="desde"
                      value={equipo.permiso.desde}
                      onChange={handleChange}
                    />
                    <br />
                    <label className="control-label">Hasta</label>
                    <input
                      type="date"
                      className="form-control"
                      name="hasta"
                      value={equipo.permiso.hasta}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">Periodo Uso</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Nº horas disponibles"
                      name="periodoUso"
                      value={equipo.permiso.periodoUso}
                      min="0"
                      onChange={handleChange}
                    />
                    <br />
                    <label className="control-label">Nº Usos</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Usos"
                      name="numUsos"
                      value={equipo.permiso.numUsos}
                      min="0"
                      step="1"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions right">
            <button type="submit" className="btn blue-dark">
              <i className="fa fa-check"></i>Guardar
            </button>
          </div>
        </form>
        {/* Fin del formulario */}
      </div>
    </div>
  );
};

export default CrearEquipos;

import React, { useState } from 'react';

const CrearTipoIncidencia = () => {
  // Estado para los campos del formulario
  const [equipoSeleccionado, setEquipoSeleccionado] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Estado para la lista de equipos
  const equipos = [
    { alias: 'Equipo 1', id: 1 },
    { alias: 'Equipo 2', id: 2 },
    { alias: 'Equipo 3', id: 3 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar los datos del formulario
    const tipoIncidencia = {
      equipo: equipoSeleccionado,
      codigo: codigo,
      descripcion: descripcion,
    };
    console.log('Tipo de Incidencia creado:', tipoIncidencia);
    // Aquí podrías realizar una llamada a la API para guardar el tipo de incidencia
  };

  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption">
          <i className="icon-users font-blue-dark"></i>
          <span className="caption-subject font-blue-dark bold uppercase">Tipo de Incidencia</span>
          <span className="caption-helper">Creación de un nuevo tipo de incidencia</span>
        </div>
      </div>
      <div className="portlet-body form">
        {/* Formulario */}
        <form className="horizontal-form" onSubmit={handleSubmit}>
          <div className="form-body">
            <div className="row">
              {/* Sección del equipo */}
              <div className="col-md-6" align="center">
                <h3 className="form-section">Equipo</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <select
                        value={equipoSeleccionado}
                        onChange={(e) => setEquipoSeleccionado(e.target.value)}
                        className="form-control select2"
                        required
                      >
                        <option value="">Seleccione un equipo</option>
                        {equipos.map((equipo) => (
                          <option key={equipo.id} value={equipo.id}>
                            {equipo.alias}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección del código */}
              <div className="col-md-6" align="center">
                <h3 className="form-section">Código</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Código"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="row">
              <div className="form-group col-md-12">
                <label className="control-label">Descripción</label>
                <textarea
                  name="descripcion"
                  id="descripcion"
                  className="form-control"
                  style={{ resize: 'vertical' }}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Botón de Guardar */}
          <div className="form-actions right">
            <button type="submit" className="btn blue-dark">
              <i className="fa fa-check"></i> Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearTipoIncidencia;

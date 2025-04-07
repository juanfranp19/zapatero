import './CrearEquipos.css';
import React, { useState } from 'react';

const CrearEquipos = () => {
  const [tipoEquipo, setTipoEquipo] = useState('');
  const [serie, setSerie] = useState('');
  const [alias, setAlias] = useState('');
  const [search, setSearch] = useState('');
  const [selectedEquipos, setSelectedEquipos] = useState([
    'Control de accesos',
    'Control de lugares',
    'Control de equipos',
    'Control de equipos a motor',
  ]);
  const [equiposSeleccionados, setEquiposSeleccionados] = useState([
    'Control de accesos'
  ]);
  const [activado, setActivado] = useState(false);

  const handleTipoEquipoChange = (e) => {
    setTipoEquipo(e.target.value);
  };

  const handleSerieChange = (e) => {
    setSerie(e.target.value);
  };

  const handleAliasChange = (e) => {
    setAlias(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredOptions = selectedEquipos.filter((equipo) =>
    equipo.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectEquiposChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setEquiposSeleccionados(selectedOptions);
  };

  const handleActivadoChange = (e) => {
    setActivado(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario', { tipoEquipo, serie, alias, equiposSeleccionados, activado });
  };

  return (
    <div className="portlet-body form">
      <form action="#" className="horizontal-form" onSubmit={handleSubmit}>
        <div className="form-body">
          <h3 className="form-section">Datos del equipo</h3>

          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label className="control-label">Tipo de equipo</label>
                <select
                  className="form-control"
                  value={tipoEquipo}
                  onChange={handleTipoEquipoChange}
                  required
                >
                  <option value="">Seleccione tipo de equipo</option>
                  <option value="Control de accesos">Control de accesos</option>
                  <option value="Control de lugares">Control de lugares</option>
                  <option value="Control de equipos">Control de equipos</option>
                  <option value="Control de equipos a motor">Control de equipos a motor</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label className="control-label">Nº de Serie</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="N/S"
                  value={serie}
                  onChange={handleSerieChange}
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-group">
                <label className="control-label">Alias</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Alias"
                  value={alias}
                  onChange={handleAliasChange}
                />
              </div>
            </div>

            {/* Checkbox para "Activado" */}
            <div className="col-md-2">
              <div className="form-group">
                <label className="control-label"></label>
                <div className="icheck-list">
                  <div className="icheckbox_minimal-grey">
                    <input
                      type="checkbox"
                      className="icheck"
                      checked={activado}
                      onChange={handleActivadoChange}
                    />
                    <label>Activado</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="form-section">Permisos</h3>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="control-label">Seleccione un equipo</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar equipo..."
                  value={search}
                  onChange={handleSearchChange}
                />

                <select
                  multiple
                  id="select-equipos"
                  className="form-control"
                  value={equiposSeleccionados}
                  onChange={handleSelectEquiposChange}
                  size={filteredOptions.length || 5}
                >
                  {filteredOptions.map((equipo) => (
                    <option key={equipo} value={equipo}>
                      {equipo}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-actions right">
              <button type="button" className="btn default btn-grey-dark">
                Cancelar
              </button>&nbsp;
              <button type="submit" className="btn blue-dark btn-blue-dark ">
                <i className="fa fa-check"></i> Guardar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CrearEquipos;

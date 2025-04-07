import './CrearUsuarios.css';
import React, { useState } from 'react';

const CrearUsuarios = () => {
  const [name, setName] = useState('Alejandro Nortes');
  const [dni, setDni] = useState('48500001Q');
  const [search, setSearch] = useState('');
  const [selectedEquipos, setSelectedEquipos] = useState([
    'Control de accesos en la entrada',
    'Taquilla sierra',
    'Taquilla taladro',
    'Control taladro',
    'Tractor #1',
    'Tractor #2',
  ]);
  const [equiposSeleccionados, setEquiposSeleccionados] = useState([
    'Control de accesos en la entrada'
  ]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDniChange = (e) => {
    setDni(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario', { name, dni, equiposSeleccionados });
  };

  return (
    <div className="portlet-body form">
      <form action="#" className="horizontal-form" onSubmit={handleSubmit}>
        <div className="form-body">
          <h3 className="form-section">Datos del usuario</h3>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Nombre y apellidos</label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  placeholder="N/S"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">DNI</label>
                <input
                  type="text"
                  id="dni"
                  className="form-control"
                  placeholder="DNI ejemplo"
                  value={dni}
                  onChange={handleDniChange}
                />
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

export default CrearUsuarios;

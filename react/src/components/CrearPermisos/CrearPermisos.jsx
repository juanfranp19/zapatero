import './CrearPermisos.css';
import React, { useState } from 'react';

const CrearPermisos = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');
  const [usos, setUsos] = useState('');
  const [activado, setActivado] = useState(false);

  const [usuariosFilter, setUsuariosFilter] = useState('');
  const [equiposFilter, setEquiposFilter] = useState('');

  const usuariosOptions = [
    "Alejandro Nortes",
    "Raul Rodríguez",
    "Isidro Ibarra",
    "Pablo Marmol",
    "Juan López",
    "María González",
  ];

  const equiposOptions = [
    "Control de accesos en la entrada",
    "Taquilla sierra",
    "Taquilla taladro",
    "Control taladro",
    "Tractor #1",
    "Tractor #2",
  ];

  const filteredUsuarios = usuariosOptions.filter(usuario =>
    usuario.toLowerCase().includes(usuariosFilter.toLowerCase())
  );

  const filteredEquipos = equiposOptions.filter(equipo =>
    equipo.toLowerCase().includes(equiposFilter.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario', { usuarios, equipos, desde, hasta, usos, activado });
  };

  const handleUsuariosChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setUsuarios(value);
    setUsuariosFilter(value.join(', '));
  };

  const handleEquiposChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setEquipos(value);
    setEquiposFilter(value.join(', '));
  };

  return (
    <div className="portlet-body form">
      <form onSubmit={handleSubmit} className="horizontal-form">
        <div className="form-body">
          <h3 className="form-section">Usuarios</h3>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Buscar usuario..." value={usuariosFilter} onChange={(e) => setUsuariosFilter(e.target.value)}/>
                <select multiple value={usuarios} onChange={handleUsuariosChange} className="form-control" size={filteredUsuarios.length || 5}> {filteredUsuarios.map((usuario, index) => (<option key={index} value={usuario}>{usuario}</option>))} </select>
              </div>
            </div>
          </div>

          <h3 className="form-section">Equipos</h3>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Buscar equipo..." value={equiposFilter} onChange={(e) => setEquiposFilter(e.target.value)}/>
                <select multiple value={equipos} onChange={handleEquiposChange} className="form-control" size={filteredEquipos.length || 5}> {filteredEquipos.map((equipo, index) => (<option key={index} value={equipo}>{equipo}</option>))} </select>
              </div>
            </div>
          </div>

          <h3 className="form-section">Permiso</h3>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label className="control-label">Desde</label>
                <input type="date" className="form-control" value={desde} onChange={(e) => setDesde(e.target.value)}/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="control-label">Hasta</label>
                <input type="date" className="form-control" value={hasta} onChange={(e) => setHasta(e.target.value)}/>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label className="control-label">Nº Usos</label>
                <input type="text" className="form-control" value={usos} onChange={(e) => setUsos(e.target.value)} placeholder="Usos" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label className="control-label"></label>
                <div className="icheck-list">
                  <label className="control-label">
                    <input type="checkbox" checked={activado} onChange={() => setActivado(!activado)}/> Activado
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions right">
          <button type="button" className="btn default btn-grey-dark">Cancelar</button>&nbsp;
          <button type="submit" className="btn blue-dark btn-blue-dark">
            <i className="fa fa-check"></i> Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearPermisos;

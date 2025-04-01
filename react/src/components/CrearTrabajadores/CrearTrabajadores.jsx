import React, { useState } from 'react';

const CrearTrabajador = () => {
  const [trabajador, setTrabajador] = useState({
    nombre: '',
    apellidos: '',
    dni: '',
    activo: false,
  });
  const [permisos, setPermisos] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrabajador((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePermisoChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPermisos = permisos.map((permiso, i) =>
      i === index ? { ...permiso, [name]: value } : permiso
    );
    setPermisos(updatedPermisos);
  };

  const addPermiso = () => {
    setPermisos([
      ...permisos,
      { equipo: '', numeroUsos: '', desde: '', hasta: '', periodoUso: '' },
    ]);
  };

  const deletePermisos = () => {
    setPermisos([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trabajador:', trabajador);
    console.log('Permisos:', permisos);
    // Aquí puedes añadir la lógica para enviar el formulario al backend
  };

  return (
    <div className="page-content">
      <div className="container">
        <div className="portlet light">
          <div className="portlet-title">
            <div className="caption">
              <i className="icon-user font-blue-dark"></i>
              <span className="caption-subject font-blue-dark bold uppercase">
                CREAR TRABAJADOR
              </span>
              <span className="caption-helper">Gestión de trabajadores</span>
            </div>
          </div>
          <div className="portlet-body form">
            <form onSubmit={handleSubmit} className="horizontal-form">
              <div className="form-body">
                <h3 className="form-section">Datos del trabajador</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        value={trabajador.nombre}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                        placeholder="Introduce el nombre"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="apellidos">Apellidos</label>
                      <input
                        type="text"
                        name="apellidos"
                        value={trabajador.apellidos}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                        placeholder="Introduce los apellidos"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="dni">DNI</label>
                      <input
                        type="text"
                        name="dni"
                        value={trabajador.dni}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                        placeholder="Introduce el dni"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="estado">Estado (por defecto inactivo)</label>
                      <select
                        className="form-control"
                        name="activo"
                        value={trabajador.activo}
                        onChange={handleInputChange}
                      >
                        <option value="false">Inactivo</option>
                        <option value="true">Activo</option>
                      </select>
                    </div>
                  </div>
                </div>

                <h3 className="form-section">Permisos</h3>

                <button type="button" onClick={addPermiso} className="btn default">
                  Añadir Permiso
                </button>

                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Equipo</th>
                      <th>Numero Usos</th>
                      <th>Desde</th>
                      <th>Hasta</th>
                      <th>PeriodoUso</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {permisos.map((permiso, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="text"
                            name="equipo"
                            value={permiso.equipo}
                            onChange={(e) => handlePermisoChange(index, e)}
                            className="form-control"
                            placeholder="Equipo"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name="numeroUsos"
                            value={permiso.numeroUsos}
                            onChange={(e) => handlePermisoChange(index, e)}
                            className="form-control"
                            placeholder="Numero Usos"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            name="desde"
                            value={permiso.desde}
                            onChange={(e) => handlePermisoChange(index, e)}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            name="hasta"
                            value={permiso.hasta}
                            onChange={(e) => handlePermisoChange(index, e)}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="periodoUso"
                            value={permiso.periodoUso}
                            onChange={(e) => handlePermisoChange(index, e)}
                            className="form-control"
                            placeholder="Periodo Uso"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => setPermisos(permisos.filter((_, i) => i !== index))}
                            className="btn btn-danger"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
                <button type="button" onClick={deletePermisos} className="btn default">
                  Eliminar todos los permisos
                </button>

                <div className="form-actions right">
                  <button type="button" className="btn default">
                    Cancelar
                  </button>
                  <button type="submit" className="btn blue-dark">
                    <i className="fa fa-check"></i>Añadir
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearTrabajador;

import React, { useState } from 'react';

const EditarUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellidos: '',
    dni: '',
  });

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Función que simula el guardado de los datos (aquí se puede añadir la lógica de backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del usuario editados:', usuario);
    // Aquí puedes añadir la lógica para enviar los datos al servidor
  };

  return (
    <div className="profile-content">
      <div className="col-md-10">
        <div className="portlet light">
          <div className="portlet-title">
            <div className="caption">
              <i className="icon-user font-blue-dark"></i>
              <span className="caption-subject font-blue-dark bold uppercase">
                EDITAR USUARIO
              </span>
              <span className="caption-helper">Gestión de usuarios</span>
            </div>
          </div>
          <div className="portlet-body form">
            <form className="horizontal-form" onSubmit={handleSubmit}>
              <div className="form-body">
                <h3 className="form-section">Datos del usuario</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        value={usuario.nombre}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Nombre"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">Apellidos</label>
                      <input
                        type="text"
                        name="apellidos"
                        value={usuario.apellidos}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Apellidos"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="control-label">DNI</label>
                    <input
                      type="text"
                      name="dni"
                      value={usuario.dni}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="DNI"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <div className="form-actions right">
                      <button type="submit" className="btn blue-dark">
                        <i className="fa fa-check"></i> Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarUsuario;

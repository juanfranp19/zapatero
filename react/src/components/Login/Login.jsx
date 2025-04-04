import React from 'react';
import './Login.css'; // Asegúrate de que tu archivo CSS esté importado

const LoginForm = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: '400px', borderRadius: '15px' }}>
        <div className="card-body">
          <h3 className="form-title text-center mb-4">Accede a tu cuenta</h3>
          <form>
            {/* Campo de Email con icono */}
            <div data-mdb-input-init className="form-outline mb-4 position-relative">
              <input
                type="email"
                id="form2Example1"
                className="form-control pl-5"
                placeholder="Email"
              />
              <i className="fa fa-user position-absolute" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}></i>
              <label className="form-label" htmlFor="form2Example1"></label>
            </div>

            {/* Campo de Contraseña con icono */}
            <div data-mdb-input-init className="form-outline mb-4 position-relative">
              <input
                type="password"
                id="form2Example2"
                className="form-control pl-5"
                placeholder="Contraseña"
              />
              <i className="fa fa-lock position-absolute" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}></i>
              <label className="form-label" htmlFor="form2Example2"></label>
            </div>

            {/* Botón de Login */}
            <div className="d-flex justify-content-end">
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary mb-3 rectangular-btn"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

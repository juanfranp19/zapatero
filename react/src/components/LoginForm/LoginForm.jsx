import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [remember, setRemember] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !clave) {
      setErrorMessage('Ingresa tu email y contraseña');
      return;
    }

    // Aquí iría tu lógica de inicio de sesión
    console.log('Email:', email);
    console.log('Contraseña:', clave);
    console.log('Recordarme:', remember);
  };

  return (
    <div className="content">
      <form onSubmit={handleLogin}>
        <h3 className="form-title">Accede a tu cuenta</h3>
        {errorMessage && (
          <div className="alert alert-danger display-hide">
            <button className="close" onClick={() => setErrorMessage('')}></button>
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="form-group">
          <label className="control-label">Email</label>
          <div className="input-icon">
            <i className="fa fa-user"></i>
            <input
              className="form-control placeholder-no-fix"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label">Contraseña</label>
          <div className="input-icon">
            <i className="fa fa-lock"></i>
            <input
              className="form-control placeholder-no-fix"
              type="password"
              placeholder="Contraseña"
              name="clave"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-actions">
          <label className="checkbox">
            <div className="checker">
              <span>
                <input
                  type="checkbox"
                  name="remember"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
              </span>
            </div>
            Recordarme
          </label>
          <button type="submit" className="btn green pull-right">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

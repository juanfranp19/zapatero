import React from 'react';
import './Error.css';

const ErrorPage = () => {
  const handleGoBack = () => {
    window.history.back(); // Para regresar a la página anterior
  };

  return (
    <div className="not-found-container">
      <h1>Oops!</h1>
      <h4>¡Algo ha ido mal!</h4>
      <button type="button" className="btn btn-dark" onClick={handleGoBack}>
        VOLVER
      </button>
    </div>
  );
};

export default ErrorPage;

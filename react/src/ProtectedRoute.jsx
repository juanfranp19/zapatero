import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated, allowedRoles, userRole }) => {
  // Si no está autenticado, lo manda al login y puede enviar un mensaje o estado
  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: 'protected', message: 'Por favor inicia sesión.' }} />;
  }

  // Si se especifican roles y el rol del usuario no está permitido, también redirige
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/inicio" replace state={{ message: 'No tienes permiso para acceder a esta página.' }} />;
  }

  return element;
};

export default ProtectedRoute;

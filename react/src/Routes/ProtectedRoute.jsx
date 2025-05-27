import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ element, allowedRoles }) => {
    const { isAuthenticated, userRole } = useAuth();
  // Si no está autenticado, lo manda al login y puede enviar un mensaje o estado
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si se especifican roles y el rol del usuario no está permitido, también redirige
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/inicio" replace />;
  }

  return element;
};

export default ProtectedRoute;

import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLateral.css';
import { useAuth } from '../../hooks/useAuth';

const MenuLateral = () => {
    const { user } = useAuth();

  return (
    <div className="menu-lateral">
      <div className="menu-portlet">
        <div className="usuario-titulo">
          <div className="usuario-nombre">{user?.name || 'Usuario'}</div>
          <div className="usuario-rol">Perfil</div>
        </div>

        <div className="usuario-menu">
          <ul className="menu-lista">
            <li className="activo">
              <Link to="/usuario-historial">
                <i className="bi bi-house-door"></i> Resumen
              </Link>
            </li>
            <li>
              <Link to="/usuario-editar">
                <i className="bi bi-person"></i> Editar
              </Link>
            </li>
            <li>
              <Link to="/usuario-accesos">
                <i className="bi bi-check-circle"></i> Accesos
              </Link>
            </li>
            <li>
              <Link to="/usuario-movimientos">
                <i className="bi bi-arrows-move"></i> Movimientos
              </Link>
            </li>
            <li>
              <Link to="/usuario-usos">
                <i className="bi bi-gear"></i> Usos
              </Link>
            </li>
            <li>
              <Link to="/usuario-incidencias">
                <i className="bi bi-x-circle"></i> Incidencias
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuLateral;

import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLateral.css';

const MenuLateral = () => {
  return (
    <div className="menu-lateral">
      <div className="menu-portlet">
        <div className="usuario-titulo">
          <div className="usuario-nombre">Alejandro Nortes</div>
          <div className="usuario-rol">Perfil</div>
        </div>

        <div className="usuario-menu">
          <ul className="menu-lista">
            <li className="activo">
              <Link to="usuario-historial.html">
                <i class="bi bi-house-door"></i> Resumen
              </Link>
            </li>
            <li>
              <Link to="usuario-editar.html">
                <i class="bi bi-person"></i> Editar
              </Link>
            </li>
            <li>
              <Link to="usuario-permisos.html">
                <i class="bi bi-lock"></i> Permisos
              </Link>
            </li>
            <li>
              <Link to="usuario-accesos.html">
                <i class="bi bi-check-circle"></i> Accesos
              </Link>
            </li>
            <li>
              <Link to="usuario-usos.html">
                <i class="bi bi-gear"></i> Usos
              </Link>
            </li>
            <li>
              <Link to="usuario-incidencias.html">
                <i class="bi bi-x-circle"></i> Incidencias
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuLateral;

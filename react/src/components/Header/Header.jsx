import React from 'react';
import LogoZapatero from '../../components/LogoZapatero/LogoZapatero'; // Asegúrate de ajustar la ruta según la ubicación del archivo

const Header = () => {
  return (
    <div className="page-header">
      {/* BEGIN HEADER TOP */}
      <div className="page-header-top">
        <div className="container">
          {/* Usamos el componente LogoZapatero */}
          <LogoZapatero />

          {/* BEGIN RESPONSIVE MENU TOGGLER */}
          <a href="javascript:;" className="menu-toggler"></a>
          {/* END RESPONSIVE MENU TOGGLER */}

          {/* BEGIN TOP NAVIGATION MENU */}
          <div className="top-menu">
            <ul className="nav navbar-nav pull-right">
              {/* BEGIN NOTIFICATION DROPDOWN */}
              <li className="dropdown dropdown-extended dropdown-dark dropdown-notification" id="header_notification_bar">
                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <i className="icon-bell"></i>
                  <span className="badge badge-default">2</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="external">
                    <h3><strong>2 alertas</strong> recientes</h3>
                    <a href="javascript:;">Ver todo</a>
                  </li>
                  <li>
                    <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '250px' }}>
                      <ul className="dropdown-menu-list scroller" style={{ height: '250px', overflow: 'hidden', width: 'auto' }} data-handle-color="#637283">
                        <li>
                          <a href="javascript:;">
                            <span className="time">3 min</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-danger">
                                <i className="fa fa-bolt"></i>
                              </span>
                              Taquilla #12 no cerrada.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="time">10 min</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-warning">
                                <i className="fa fa-bell-o"></i>
                              </span>
                              Usuario #12 intentó usar Máquina #TM05.
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              {/* END NOTIFICATION DROPDOWN */}

              <li className="dropdown dropdown-separator">
                <span className="separator"></span>
              </li>

              {/* BEGIN USER LOGIN DROPDOWN */}
              <li className="dropdown dropdown-user dropdown-dark">
                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <i className="icon-user">&nbsp;</i>
                  <span className="username username-hide-mobile">Alejandro</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-default">
                  <li>
                    <a href="#">
                      <i className="icon-user"></i> Mi Perfil
                    </a>
                  </li>
                  <li>
                    <a href="extra_lock.html">
                      <i className="icon-lock"></i> Bloquear pantalla
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="icon-key"></i> Salir
                    </a>
                  </li>
                </ul>
              </li>
              {/* END USER LOGIN DROPDOWN */}
            </ul>
          </div>
          {/* END TOP NAVIGATION MENU */}
        </div>
      </div>
      {/* END HEADER TOP */}

      {/* BEGIN HEADER MENU */}
      <div className="page-header-menu" style={{ display: 'block' }}>
        <div className="container">
          {/* BEGIN HEADER SEARCH BOX */}
          <form className="search-form" action="extra_search.html" method="GET">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Buscar" name="query" />
              <span className="input-group-btn">
                <a href="javascript:;" className="btn submit">
                  <i className="icon-magnifier"></i>
                </a>
              </span>
            </div>
          </form>
          {/* END HEADER SEARCH BOX */}

          {/* BEGIN MEGA MENU */}
          <div className="hor-menu">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="index.html">Inicio</a>
              </li>
              <li className="menu-dropdown">
                <a href="usuarios.html">Usuarios</a>
              </li>
              <li className="menu-dropdown">
                <a href="equipos.html">Equipos</a>
              </li>
              <li className="menu-dropdown">
                <a href="permisos.html">Permisos</a>
              </li>
              <li className="menu-dropdown">
                <a href="historial.html">Historial</a>
              </li>
              <li className="menu-dropdown">
                <a href="incidencias.html">Incidencias</a>
              </li>
            </ul>
          </div>
          {/* END MEGA MENU */}
        </div>
      </div>
      {/* END HEADER MENU */}
    </div>
  );
};

export default Header;

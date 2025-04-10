import { Link } from 'react-router-dom';
import DropdownAlertas from "../DropdownAlertas/DropdownAlertas";
import DropdownUsuario from "../DropdownUsuario/DropdownUsuario";
import LogoZapatero from "../LogoZapatero/LogoZapatero";
import "./Header.css";

const Header = () => {

    return (
        <nav class="row cabecera">

            <div class="col-12 col-sm-6 d-sm-flex justify-content-start">
                <Link class="navbar-brand" href="#"><LogoZapatero></LogoZapatero></Link>
            </div>

            <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end usuario-alertas">
                <DropdownAlertas></DropdownAlertas>
                <DropdownUsuario></DropdownUsuario>
            </div>

            <div class="col-12 navbar navbar-expand-md">
                <div class="container-fluid">

                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item nav-item-menu">
                                <Link class="nav-link" to="/inicio">Inicio</Link>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <Link class="nav-link" to="/usuarios">Usuarios</Link>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <Link class="nav-link" to="/equipos">Equipos</Link>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <Link class="nav-link" to="/permisos">Permisos</Link>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <Link class="nav-link" to="/historial">Historial</Link>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <Link class="nav-link" to="/incidencias">Incidencias</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Header;

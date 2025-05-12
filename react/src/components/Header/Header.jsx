import { Link } from 'react-router-dom';
import DropdownAlertas from "../DropdownAlertas/DropdownAlertas";
import DropdownUsuario from "../DropdownUsuario/DropdownUsuario";
import LogoZapatero from "../LogoZapatero/LogoZapatero";
import "./Header.css";

const Header = () => {

    return (
        <nav className="row cabecera">

            <div className="col-12 col-sm-6 d-sm-flex justify-content-start">
                <Link className="navbar-brand" href="#"><LogoZapatero></LogoZapatero></Link>
            </div>

            <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end usuario-alertas">
                <DropdownAlertas></DropdownAlertas>
                <DropdownUsuario></DropdownUsuario>
            </div>

            <div className="col-12 navbar navbar-expand-md">
                <div className="container-fluid">

                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item nav-item-menu">
                                <Link className="nav-link" to="/inicio">Inicio</Link>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <Link className="nav-link" to="/mapa">Mapa</Link>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <Link className="nav-link" to="/trabajadores">Trabajadores</Link>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <Link className="nav-link" to="/equipos">Equipos</Link>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <Link className="nav-link" to="/permisos">Permisos</Link>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <Link className="nav-link" to="/historial">Historial</Link>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <Link className="nav-link" to="/incidencias">Incidencias</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Header;

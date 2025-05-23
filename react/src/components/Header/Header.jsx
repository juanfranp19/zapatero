import { NavLink } from 'react-router-dom';
import DropdownAlertas from "../DropdownAlertas/DropdownAlertas";
import DropdownUsuario from "../DropdownUsuario/DropdownUsuario";
import LogoZapatero from "../LogoZapatero/LogoZapatero";
import "./Header.css";

const Header = () => {

    return (
        <nav className="row cabecera">

            <div className="col-12 col-sm-6 d-sm-flex justify-content-start">
                <NavLink className="navbar-brand" to="/inicio"><LogoZapatero></LogoZapatero></NavLink>
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
                                <NavLink className="nav-link" to="/inicio">Inicio</NavLink>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <NavLink className="nav-link" to="/mapa">Mapa</NavLink>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <NavLink className="nav-link" to="/trabajadores">Trabajadores</NavLink>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <NavLink className="nav-link" to="/equipos">Equipos</NavLink>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <NavLink className="nav-link" to="/movimientos">Movimientos</NavLink>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <NavLink className="nav-link" to="/usos">Usos</NavLink>
                            </li>
                            <li className="nav-item nav-item-menu">
                                <NavLink className="nav-link" to="/avisos">Avisos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Header;

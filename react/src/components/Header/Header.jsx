import DropdownAlertas from "../DropdownAlertas/DropdownAlertas";
import DropdownUsuario from "../DropdownUsuario/DropdownUsuario";
import LogoZapatero from "../LogoZapatero/LogoZapatero";
import "./Header.css";

const Header = () => {

    return (
        <nav class="row cabecera">

            <div class="col-12 col-sm-6 d-sm-flex justify-content-start">
                <a class="navbar-brand" href="#"><LogoZapatero></LogoZapatero></a>
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
                                <a class="nav-link" href="#">Inicio</a>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <a class="nav-link" href="#">Usuarios</a>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <a class="nav-link" href="#">Equipos</a>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <a class="nav-link" href="#">Permisos</a>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <a class="nav-link" href="#">Historial</a>
                            </li>
                            <li class="nav-item nav-item-menu">
                                <a class="nav-link" href="#">Incidencias</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Header;

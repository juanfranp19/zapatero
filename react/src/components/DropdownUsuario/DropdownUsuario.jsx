import "./DropdownUsuario.css";

const DropdownUsuario = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" aria-expanded="false">
                    <i className="bi bi-person"></i>
                    <span className="d-none d-md-block"> Alejandro</span>
                </button>

                <ul className="dropdown-menu dropdown-left">
                    <li><a className="dropdown-item" href="#"><i className="bi bi-person"></i> Mi perfil</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-lock"></i> Bloquear pantalla</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-key"></i> Salir</a></li>
                </ul>
            </li>
        </ul>
    );
}

export default DropdownUsuario;

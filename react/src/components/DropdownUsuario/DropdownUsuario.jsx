import "./DropdownUsuario.css";

const DropdownUsuario = () => {
    return (
        <div className="row">
            <div className="dropdown-usuarios col-12">
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                    <i className="bi bi-person">
                        <span className="nombre-usuario d-none d-md-block">Alejandro</span>
                    </i>
                </a>
                <ul class="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="bi bi-person"></i> Mi perfil</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-lock"></i> Bloquear pantalla</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-key"></i> Salir</a></li>
                </ul>
            </div>
        </div>
    );
}

export default DropdownUsuario;

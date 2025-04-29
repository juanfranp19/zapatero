import "./DropdownUsuario.css";
import { useAuth } from "../../hooks/useAuth"

const DropdownUsuario = () => {

    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout(); // cierra sesion
    };

    return (
        <div className="row">
            <div className="dropdown-usuarios col-12">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                    <i className="bi bi-person">
                        <span className="nombre-usuario d-none d-md-block">Alejandro</span>
                    </i>
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="bi bi-person"></i> Mi perfil</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-key"> </i> <button onClick={handleLogout}>Salir</button> </a></li>
                </ul>
            </div>
        </div>
    );
}

export default DropdownUsuario;

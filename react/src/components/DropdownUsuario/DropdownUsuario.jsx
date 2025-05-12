import "./DropdownUsuario.css";
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth"

const DropdownUsuario = () => {

    const { logout, user } = useAuth();

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout(); // cierra sesión
    };

    return (
        <div className="row">
            <div className="dropdown-usuarios col-12">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                    <i className="bi bi-person">
                        <span className="nombre-usuario d-none d-md-block">
                            {user?.name || "Usuario"}
                        </span>
                    </i>
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/usuario-historial"><i className="bi bi-person"></i> Mi perfil</Link></li>
                    <li><a className="dropdown-item" href="#" onClick={handleLogout}><i className="bi bi-key"></i> Salir</a></li>
                </ul>
            </div>
        </div>
    );
}

export default DropdownUsuario;

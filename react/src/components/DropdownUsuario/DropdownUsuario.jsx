const DropdownUsuario = () => {



    return (
        <ul className="navbar-nav">
            <li class="nav-item dropdown">
                <button class="nav-link dropdown-toggle">
                    <i class="bi bi-person"></i>
                    <span className="d-none"> Alejandro</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#"><i class="bi bi-person"></i> Mi perfil</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-lock"></i> Bloquear pantalla</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-key"></i> Salir</a></li>
                </ul>
            </li>
        </ul>
    );
}

export default DropdownUsuario;

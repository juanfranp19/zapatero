import "./DropdownAlertas.css";

const DropdownAlertas = () => {

    return (
        <ul className="navbar-nav">
            <li class="nav-item dropdown">

                <button class="nav-link dropdown-toggle boton-alertas">
                    <i class="bi bi-bell"></i>
                    <span className="num-alertas">1</span>
                </button>

                <ul class="dropdown-menu">
                    {/* alertas */}
                </ul>

            </li>
        </ul>
    );
}

export default DropdownAlertas;

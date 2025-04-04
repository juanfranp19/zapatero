import "./DropdownAlertas.css";

const DropdownAlertas = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle boton-alertas" aria-expanded="false">
                    <i className="bi bi-bell"></i>
                    <span className="num-alertas">1</span>
                </button>

                <ul className="dropdown-menu dropdown-left">
                    <li><a className="dropdown-item" href="#"> <i className="bi bi-lock"> </i> Alerta</a></li>
                    {/* Aquí puedes agregar más alertas */}
                </ul>
            </li>
        </ul>
    );
}

export default DropdownAlertas;

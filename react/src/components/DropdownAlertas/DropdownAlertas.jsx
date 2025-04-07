import "./DropdownAlertas.css";

const DropdownAlertas = () => {
    return (
        <div className="row">
            <div className="dropdownalertas col-12">
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                    <i className="bi bi-bell"></i>
                    <span className="num-alertas">9+</span>
                </a>
                <ul class="dropdown-menu">
                    <li><a className="dropdown-item" href="#"> alertas </a></li>
                </ul>
            </div>
        </div>
    );
}

export default DropdownAlertas;

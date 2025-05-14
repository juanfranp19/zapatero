import './TituloPagina.css';

const TituloPagina = (props) => {

    return (
        <div className="col-12 titulo-pagina">
            <h1>
                <i className="bi bi-people-fill titulo-icono"></i>
                {props.nombre} <span className="titulo-pagina-pequenio">Gestion de {props.nombre}</span>
            </h1>
        </div>
    );
}

export default TituloPagina;

import "./DatosPersonalIncidencias.css";

const DatosPersonalIncidencias = () => {

    const trabajadores = [
        { nombre: "Raul Rodriguez", hora: "14/02/2015 08:15", maquinas: 45 },
        { nombre: "Isidro Ibarra", hora: "14/02/2015 08:15", maquinas: 45 },
        { nombre: "Isidro Ibarra", hora: "14/02/2015 08:15", maquinas: 45 },
        { nombre: "Isidro Ibarra", hora: "14/02/2015 08:15", maquinas: 45 },
        { nombre: "Isidro Ibarra", hora: "14/02/2015 08:15", maquinas: 45 },
        { nombre: "Isidro Ibarra", hora: "14/02/2015 08:15", maquinas: 45 },
        { nombre: "Isidro Ibarra", hora: "14/02/2015 08:15", maquinas: 45 },
    ];

    return (
        <div className="row card componente-inicio">

            <div className="col-12">
                <h1 className="titulo-componentes-inicio">Personal en las instalaciones</h1>
            </div>

            <div className="col-12">
                <div className="row datos-inicio">

                    <div className="col-6 border-end">
                        <div className="row dato-inicio" style={{ textAlign: 'right' }}>
                            <div className="col-12 nombre-dato-inicio">Total</div>
                            <div className="col-12 numero-dato-inicio">120</div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row dato-inicio" style={{ textAlign: 'left' }}>
                            <div className="col-12 nombre-dato-inicio">Trabajando</div>
                            <div className="col-12 numero-dato-inicio">105</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* style={{ overflowX: "auto", whiteSpace: "nowrap" }} */}

            <div className="col-12">
                <div className="scroll-horizontal">

                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Trabajador</th>
                                <th>Hora de entrada</th>
                                <th>Máquinas usadas hoy</th>
                            </tr>
                        </thead>

                        <tbody>
                            {trabajadores.map((trabajador, index) => (
                                <tr key={index}>
                                    <td>{trabajador.nombre}</td>
                                    <td>{trabajador.hora}</td>
                                    <td>{trabajador.maquinas}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
}

export default DatosPersonalIncidencias;

import "./DatosPersonalIncidencias.css";

const DatosPersonalIncidencias = () => {

    const trabajadores = [
        { nombre: "Raul Rodriguez", hora: "14/02/2015 08:15", maquinas: 45 },
        { nombre: "Isidro Ibarra", hora: "14/02/2015 08:15", maquinas: 45 },
    ];

    return (
        <div className="row card">

            <div className="col-12">
                Personal en las instalaciones
            </div>

            <div className="col-12">

                <div className="row">
                    <div className="col-6 border-end">
                        <div className="row" style={{ textAlign: 'right' }}>
                            <div className="col-12">Total</div>
                            <div className="col-12">120</div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row" style={{ textAlign: 'left' }}>
                            <div className="col-12">Trabajando</div>
                            <div className="col-12">105</div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="col-12">

                <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                    <table className="table table-striped">
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

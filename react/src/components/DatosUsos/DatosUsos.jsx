const DatosUsos = () => {



    const usos = [
        { trabajador: "Raul Rodriguez", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Isidro Ibarra", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Maria Dolores", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Alejandro Nortes", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Raul Rodriguez", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Isidro Ibarra", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Maria Dolores", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Alejandro Nortes", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
    ];


    return (
        <div className="row card componente-inicio">

            <div className="col-12">
                <h1 className="titulo-componentes-inicio">Usos</h1>
            </div>

            <div className="col-12">
                <div className="scroll-horizontal">

                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Trabajador</th>
                                <th>Equipo</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>

                        <tbody>
                            {usos.map((uso, index) => (
                                <tr key={index}>
                                    <td className="con-enlace">{uso.trabajador}</td>
                                    <td className="con-enlace">{uso.equipo}</td>
                                    <td>{uso.fecha}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
}

export default DatosUsos;

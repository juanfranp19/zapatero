const DatosIncidencias = () => {

    const incidencias = [
        { trabajador: "Raul Rodriguez", equipo: "Tractor #1", fecha: "14/02/2015 08:15", descripcion: "No tiene acceso al equipo" },
        { trabajador: "Isidro Ibarra", equipo: "Tractor #1", fecha: "14/02/2015 08:15", descripcion: "No tiene acceso al equipo" },
        { trabajador: "Isidro Ibarra", equipo: "Tractor #1", fecha: "14/02/2015 08:15", descripcion: "No tiene acceso al equipo" },
        { trabajador: "Isidro Ibarra", equipo: "Tractor #1", fecha: "14/02/2015 08:15", descripcion: "No tiene acceso al equipo" },
        { trabajador: "Alejandro Nortes", equipo: "Tractor #1", fecha: "14/02/2015 08:15", descripcion: "No tiene acceso al equipo" }
    ];


    return (
        <div className="row componente-inicio">

            <div className="col-12">
                <h1 className="titulo-componentes-inicio">Incidencias</h1>
            </div>

            <div className="col-12">
                <div className="scroll-horizontal">

                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Trabajador</th>
                                <th>Equipo</th>
                                <th>Fecha</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {incidencias.map((incidencia, index) => (
                                <tr key={index}>
                                    <td className="con-enlace">{incidencia.trabajador}</td>
                                    <td className="con-enlace">{incidencia.equipo}</td>
                                    <td>{incidencia.fecha}</td>
                                    <td>{incidencia.descripcion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
}

export default DatosIncidencias;

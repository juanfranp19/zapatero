import { useLocation, Link } from "react-router-dom";

// Componente que muestra la barra de navegación tipo "breadcrumb"
const Breadcrumbs = ({ nombreFinal }) => {
    // Hook de React Router para obtener la ubicación actual (URL)
    const location = useLocation();

    // Separa la URL en segmentos (ej. "/equipos/19" → ["equipos", "19"])
    const pathnames = location.pathname.split('/').filter(x => x);

    // Diccionario que traduce segmentos de URL a nombres amigables
    const breadcrumbNameMap = {
        inicio: 'Inicio',
        mapa: 'Mapa',
        'detalles-maquina': 'Detalles-maquina',
        usuarios: 'Usuarios',
        'crear-usuario': 'Crear Usuario',
        equipos: 'Equipos',
        'crear-equipo': 'Crear Equipo',
        permisos: 'Permisos',
        'crear-permiso': 'Crear Permiso',
        historial: 'Historial',
        incidencias: 'Incidencias',
    };

    const noLinkIfFollowedById = ['detalles-maquina', 'detalles'];

    return (
        <nav aria-label="breadcrumb">
            <ol className="col-12 breadcrumb">
                {/* Primer elemento del breadcrumb siempre es Inicio */}
                <li className="breadcrumb-item">
                    <Link to="/inicio">Inicio</Link>
                </li>

                {/* Recorremos cada segmento de la URL */}
                {pathnames.map((segment, index) => {
                    // Verificamos si es el último segmento (ej. el ID)
                    const isLast = index === pathnames.length - 1;

                    // Construimos el path hasta este segmento (para los enlaces)
                    const href = `/${pathnames.slice(0, index + 1).join('/')}`;

                    const nextSegment = pathnames[index + 1]; // el que viene después
                    const isNextSegmentId = nextSegment && !breadcrumbNameMap[nextSegment]; // si el próximo segmento no está en el diccionario, asumimos que es un ID


                    // Obtenemos un nombre para mostrar:
                    // - Si es el último y hay un nombreFinal (por ejemplo, nombre de la máquina), lo usamos.
                    // - Si el segmento está en el diccionario, usamos su valor.
                    // - Si no, simplemente lo capitalizamos.
                    const displayName =
                        isLast && nombreFinal
                            ? nombreFinal
                            : breadcrumbNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

                    // Solo desactiva el enlace si el segmento está en la lista especial y el próximo es un ID
                    const shouldBeLink = !isLast && !(noLinkIfFollowedById.includes(segment) && isNextSegmentId);

                    return (
                        <li key={segment} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                            {shouldBeLink ? (
                                <Link to={href}>{displayName}</Link>
                            ) : (
                                displayName
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

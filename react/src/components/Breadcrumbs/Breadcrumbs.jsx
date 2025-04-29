import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    // Obtener los segmentos del pathname
    const pathnames = location.pathname.split('/').filter(x => x);

    // Diccionario para traducir segmentos de URL a nombres legibles
    const breadcrumbNameMap = {
        usuarios: 'Usuarios',
        'crear-usuario': 'Crear Usuario',
        equipos: 'Equipos',
        'crear-equipo': 'Crear Equipo',
        permisos: 'Permisos',
        'crear-permiso': 'Crear Permiso',
        historial: 'Historial',
        incidencias: 'Incidencias',
    };

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Inicio</Link>
                </li>
                {pathnames.map((segment, index) => {
                    // Crear el path para el segmento actual
                    const href = `/${pathnames.slice(0, index + 1).join('/')}`;

                    // Usar el breadcrumbNameMap para obtener el nombre amigable
                    const displayName = breadcrumbNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1); // Usar el nombre del diccionario o capitalizar el segmento

                    // Si es el último segmento, no hacer link
                    return (
                        <li key={segment} className={`breadcrumb-item ${index === pathnames.length - 1 ? 'active' : ''}`}>
                            {index === pathnames.length - 1 ? (
                                displayName // Texto sin enlace si es el último
                            ) : (
                                <Link to={href}>{displayName}</Link> // Enlace para los otros segmentos
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

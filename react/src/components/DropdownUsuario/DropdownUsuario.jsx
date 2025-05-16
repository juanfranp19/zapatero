import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useGetPrivatecArchivo } from '../../hooks/useStorage';
import { useGetTrabajador } from '../../hooks/useTrabajador';
import { useGetUser } from '../../hooks/useUser';

import './DropdownUsuario.css';

const DropdownUsuario = () => {

    const { logout, user } = useAuth();

    const { user: userInfo, cargando: cargandoUser } = useGetUser(user?.id);
    const { trabajador, cargando: cargandoTrabajador } = useGetTrabajador(userInfo?.trabajador?.id);
    const { archivoDevuelto, cargando: cargandoArchivo } = useGetPrivatecArchivo('trabajadores', 'imagen', trabajador?.imagen);

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout(); // Llama a logout cuando se hace clic en 'Salir'
    };

    console.log('imagen de usuario', archivoDevuelto);

    return (
        <div className='row'>
            <div className='dropdown-usuarios col-12'>
                <a className='nav-link' href='#' role='button' data-bs-toggle='dropdown'>

                    {/* si el archivo ha cargado, es devuelto, y no es null aparece la imagen del usuario */}
                    {!cargandoArchivo && archivoDevuelto && trabajador?.imagen ? (
                        <img
                            src={archivoDevuelto}
                            alt={trabajador?.nombre}
                            className='imagen-usuario'
                        />
                    ) : (
                        <i className='bi bi-person'>
                            <span className='nombre-usuario d-none d-md-block'>
                                {user?.name || 'Usuario'}
                            </span>
                        </i>
                    )}
                </a>
                <ul className='dropdown-menu'>
                    <li><Link className='dropdown-item' to='/usuario-historial'><i className='bi bi-person'></i> Mi perfil</Link></li>
                    <li><a className='dropdown-item' href='#' onClick={handleLogout}><i className='bi bi-key'></i> Salir</a></li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownUsuario;

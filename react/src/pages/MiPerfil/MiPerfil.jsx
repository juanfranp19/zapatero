import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import DatosPerfil from '../../components/DatosPerfil/DatosPerfil';
import TituloPagina from '../../components/TituloPagina/TituloPagina';

const MiPerfil = () => {

    return (
        <div>
            <TituloPagina nombre='Mi perfil' />
            <Breadcrumbs />

            <DatosPerfil />

        </div>
    );
}

export default MiPerfil;

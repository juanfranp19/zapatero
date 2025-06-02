import { useAuth } from '../../hooks/useAuth';
import { useGetTrabajador } from '../../hooks/useTrabajador';
import { useGetUser } from '../../hooks/useUser';

const DatosPerfil = () => {

    const { user } = useAuth();
    const { trabajador, cargando: cargandoTrabajador } = useGetTrabajador(user?.id);
    const { user: userInfo, cargando: cargandoUserInfo } = useGetUser(user?.id);

    console.log(userInfo);




    return (<>{userInfo?.email}</>);

}

export default DatosPerfil;

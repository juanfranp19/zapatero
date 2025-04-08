import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
// import './Layout.css';

const Layout = () => {
    return (
        <div className="layout-container">

            <Header />

            {/* Este es el contenido de las rutas anidadas */}
            <main className="main-content">
                <Outlet />  {/* Aquí se renderizarán las páginas de Dashboard, Usuario, Equipos, etc. */}
            </main>
        </div>
    );
};

export default Layout;

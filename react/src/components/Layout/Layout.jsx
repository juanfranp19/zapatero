import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../css/componentes-inicio.css';
// import './Layout.css';

const Layout = () => {
    return (
        <div className="layout-container">

            <Header />

            {/* Este es el contenido de las rutas anidadas */}
            <main className="main-content">
                <Outlet />  {/* Aquí se renderizarán las páginas de Dashboard, Usuario, Equipos, etc. */}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;

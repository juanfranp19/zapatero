import React from 'react';
import PanelControlSeccion from "../../components/PanelControlSeccion/PanelControlSeccion";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import TituloPagina from "../../components/TituloPagina/TituloPagina";
import MenuLateral from "../../components/MenuLateral/MenuLateral";
import './UsuarioHistorialPage.css';

const UsuarioHistorialPage = () => {
    return (
        <div className="usuario-pagina-contenedor">
            <div className="usuario-layout">
                <aside className="usuario-sidebar">
                    <TituloPagina nombre="Historial" />
                    <Breadcrumbs />
                    <MenuLateral />
                </aside>

                <main className="usuario-contenido">
                    <PanelControlSeccion />
                </main>
            </div>
        </div>

    );
};

export default UsuarioHistorialPage;

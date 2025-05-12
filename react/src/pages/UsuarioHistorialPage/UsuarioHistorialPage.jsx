import React from 'react';
import PanelControlSeccion from "../../components/PanelControlSeccion/PanelControlSeccion";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import TituloPagina from "../../components/TituloPagina/TituloPagina";
import MenuLateral from "../../components/MenuLateral/MenuLateral";
import './UsuarioHistorialPage.css';

const UsuarioHistorialPage = () => {
  return (
    <div className="usuario-pagina">
      <aside className="usuario-sidebar">
        <MenuLateral />
      </aside>

      <div className="usuario-main">
        <header className="usuario-header">
          <TituloPagina nombre="Usuario" />
          <Breadcrumbs />
        </header>

        <section className="usuario-panel">
          <PanelControlSeccion />
        </section>
      </div>
    </div>
  );
};

export default UsuarioHistorialPage;

import React from 'react';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import TituloPagina from "../../components/TituloPagina/TituloPagina";
import MenuLateral from "../../components/MenuLateral/MenuLateral";

const UsuarioEditarPage = () => {
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

      </div>
    </div>
  );
};

export default UsuarioEditarPage;
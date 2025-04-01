import React from 'react';

const Breadcrumb = () => {
  return (
    <ul className="page-breadcrumb breadcrumb">
      <li>
        <a href="#">Inicio</a><i className="fa fa-circle"></i>
      </li>
      <li className="active">
        Cuadro de mando
      </li>
    </ul>
  );
};

export default Breadcrumb;
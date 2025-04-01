import React from "react";
import logo from "../../assets/images/logo-default.png";

const LogoZapatero = () => {
  return (
    <div className="page-logo">
      <a href="">
        <img
          src={logo}
          alt="Zapatero a tus zapatos"
          className="logo-default"
        />
      </a>
    </div>
  );
};

export default LogoZapatero;

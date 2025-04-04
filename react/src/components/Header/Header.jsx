
/*

import DropdownAlertas from "../DropdownAlertas/DropdownAlertas";
import DropdownUsuario from "../DropdownUsuario/DropdownUsuario";
import LogoZapatero from "../LogoZapatero/LogoZapatero";
import "./Header.css";

const Header = () => {








    return (
        <>







            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand navbar-visible" href="#"><LogoZapatero/></a>
                    <DropdownAlertas></DropdownAlertas>
                    <DropdownUsuario></DropdownUsuario>
                    <button className="navbar-toggler navbar-visible" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>











        </>
    );
}

export default Header;


*/



import DropdownAlertas from "../DropdownAlertas/DropdownAlertas";
import DropdownUsuario from "../DropdownUsuario/DropdownUsuario";
import LogoZapatero from "../LogoZapatero/LogoZapatero";
import "./Header.css";

const Header = () => {








    return (
        <>





            <div className="navbar navbar-expand-lg bg-body-tertiary col-12">
                <div className="container-fluid">

                    <div className="row w-100">


                        <a className="col-11 navbar-visible"  href="#"><LogoZapatero /></a>


                        <button className="col-1 navbar-toggler boton-navbar"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="bi bi-list"></i>
                        </button>


                        <div className="col-12" >
                            <div className="row">


                                <div className="col-2">
                                    <div className="row">
                                        <div className="col-6"><DropdownAlertas></DropdownAlertas></div>
                                        <div className="col-6"><DropdownUsuario></DropdownUsuario></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="row collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav col-12">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>










        </>
    );
}

export default Header;

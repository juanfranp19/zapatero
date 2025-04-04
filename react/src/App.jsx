import Header from "./components/Header/Header";
import './css/style.css';
import './css/bootstrap.css';
import DatosPersonalIncidencias from "./components/DatosPersonalIncidencias/DatosPersonalIncidencias";

function App() {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/* <Header></Header> */}
                    <DatosPersonalIncidencias></DatosPersonalIncidencias>
                </div>
            </div>
        </>
    );
}

export default App;

import Header from './components/Header/Header.jsx'
import PageHead from './components/PageHead/PageHead.jsx';
import Breadcrumb from './components/Breadcrumb/Breadcrumb.jsx';
import EstadisticasDeUso from './components/EstadisticasDeUso/EstadisticasDeUso.jsx';
import Usos from './components/Usos/Usos.jsx';
import Incidencias from './components/Incidencias/Incidencias.jsx';

function App() {

    return (
        <>
            <Header></Header>
            <PageHead></PageHead>
            <Breadcrumb></Breadcrumb>

            <EstadisticasDeUso></EstadisticasDeUso>
            <Usos></Usos>
            <Incidencias></Incidencias>
        </>
    );
}

export default App;

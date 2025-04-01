import React, { useState } from 'react';

const Permisos = () => {
  // Estado para manejar las fechas
  const [fecha, setFecha] = useState({
    desde: '',
    hasta: '',
  });

  // Función para manejar el cambio de valores en los campos de fecha
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFecha((prevFecha) => ({
      ...prevFecha,
      [name]: value,
    }));
  };

  // Función para manejar la búsqueda por fecha
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Búsqueda realizada con las fechas:', fecha);
    // Aquí se puede agregar la lógica para realizar la búsqueda
  };

  // Función para manejar la acción de "Mostrar Todos"
  const handleShowAll = () => {
    console.log('Mostrar todos los permisos');
    // Aquí puedes agregar la lógica para mostrar todos los permisos
  };

  return (
    <div className="col-md-12">
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-lock font-blue-dark"></i>
            <span className="caption-subject font-blue-dark bold uppercase">Permisos</span>
            <span className="caption-helper">Gestión de permisos</span>
          </div>
          <div className="actions">
            <button onClick={() => console.log('Crear nuevo permiso')} className="btn btn-circle btn-default">
              <i className="fa fa-plus"></i>
              <span className="hidden-480"> Crear Permiso </span>
            </button>
          </div>
        </div>
        <div className="portlet-body">
          {/* Comienzo de la búsqueda por fecha */}
          <div className="row">
            <div className="col-md-3 col-md-offset-1" align="center">
              <br />
              <b>
                <h4>Búsqueda por fecha :</h4>
              </b>
            </div>
            <form id="fechas" onSubmit={handleSearch}>
              <div className="col-md-2" align="center">
                <label htmlFor="desde">DESDE</label>
                <input
                  id="desde"
                  type="date"
                  className="form-control datepicker"
                  name="desde"
                  value={fecha.desde}
                  onChange={handleDateChange}
                  style={{ width: '160px' }}
                  required
                />
              </div>
              <div className="col-md-2" align="center">
                <label htmlFor="hasta">HASTA</label>
                <input
                  id="hasta"
                  type="date"
                  className="form-control datepicker"
                  name="hasta"
                  value={fecha.hasta}
                  onChange={handleDateChange}
                  style={{ width: '160px' }}
                  required
                />
              </div>
              <div className="col-md-1" align="center">
                <br />
                <button type="submit" className="btn btn-info">
                  Buscar
                </button>
              </div>
            </form>
            <div className="col-md-1" align="center">
              <br />
              <button onClick={handleShowAll} className="btn btn-info">
                Mostrar Todos
              </button>
            </div>
          </div>
          <br />
          {/* Fin de la búsqueda por fecha */}

          <div className="table-scrollable table-scrollable-borderless table-scrollable-scroll">
            <table className="table table-striped table-condensed table-bordered table-hover">
              <tbody>
                {/* Aquí irían los permisos, que en este caso se manejarían dinámicamente */}
                {/* Ejemplo de permisos listados (debes integrar la lógica para obtener y mostrar los permisos) */}
                <tr>
                  <td>Permiso 1</td>
                  <td>Fecha Desde</td>
                  <td>Fecha Hasta</td>
                  <td>Acción</td>
                </tr>
                <tr>
                  <td>Permiso 2</td>
                  <td>Fecha Desde</td>
                  <td>Fecha Hasta</td>
                  <td>Acción</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permisos;

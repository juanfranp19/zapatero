import React from 'react';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';

const TiposDeParametros = () => {
  // Ejemplo de datos para exportar
  const data = [
    { nombre: 'Parametro 1', descripcion: 'Descripción del parámetro 1' },
    { nombre: 'Parametro 2', descripcion: 'Descripción del parámetro 2' },
    { nombre: 'Parametro 3', descripcion: 'Descripción del parámetro 3' },
  ];

  // Función para exportar a Excel
  const exportToExcel = () => {
    // Crea un libro de trabajo de Excel
    const wb = XLSX.utils.book_new();
    // Convierte los datos en una hoja de trabajo
    const ws = XLSX.utils.json_to_sheet(data);
    // Añade la hoja de trabajo al libro
    XLSX.utils.book_append_sheet(wb, ws, 'Parametros');
    // Exporta el libro a un archivo Excel
    XLSX.writeFile(wb, 'parametros.xlsx');
  };

  return (
    <div className="col-md-12">
      <div className="portlet light">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-close font-blue-dark"></i>
            <span className="caption-subject font-blue-dark bold uppercase">Tipos de Parámetros</span>
            <span className="caption-helper">Gestión de los tipos de parámetros de eficacia</span>
          </div>
          <div className="actions">
            <div className="btn-group">
              {/* Exportar a CSV */}
              <CSVLink data={data} filename="parametros.csv">
                <a className="btn btn-default btn-circle">
                  <i className="fa fa-share"></i>
                  <span className="hidden-480"> Exportar a CSV </span>
                </a>
              </CSVLink>
              {/* Exportar a Excel */}
              <a
                className="btn btn-default btn-circle"
                href="javascript:;"
                onClick={exportToExcel}
              >
                <i className="fa fa-share"></i>
                <span className="hidden-480"> Exportar a Excel </span>
              </a>
            </div>
          </div>
        </div>

        <div className="portlet-body">
          {/* Aquí puedes agregar más contenido dinámico o una tabla */}
        </div>
      </div>
    </div>
  );
};

export default TiposDeParametros;

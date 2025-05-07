import React from 'react';

const TablaSeccion = ({ title, data }) => (
  <div className="col-md-6">
    <div className="portlet light">
      <div className="portlet-title tabbable-line">
        <div className="caption caption-md">
          <span className="caption-subject font-blue-madison bold uppercase">{title}</span>
        </div>
      </div>
      <div className="portlet-body">
        <div className="table-scrollable table-scrollable-borderless" style={{ minHeight: '300px' }}>
          <table className="table table-hover table-light">
            <thead>
              <tr className="uppercase">
                <th>Equipo</th>
                <th>Usos</th>
                <th>Última vez</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <a href={item.link} className="primary-link" target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </td>
                  <td>{item.usos}</td>
                  <td>{item.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default TablaSeccion;

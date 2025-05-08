import React from 'react';

const EntradaSeccion = ({ title, items }) => (
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
                <th>Descripción</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default EntradaSeccion;

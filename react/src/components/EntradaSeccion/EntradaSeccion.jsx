import React from 'react';

const EntradaSeccion = ({ title, items, icon, color }) => (
  <div className="portlet light">
    <div className="portlet-title tabbable-line">
      <div className="caption caption-md">
        <i className={`bi ${icon} me-2 text-${color}`}></i>
        <h4 className={`caption-subject font-${color} bold uppercase`}>{title}</h4>
      </div>
    </div>
    <div className="portlet-body">
      <div className="table-scrollable table-scrollable-borderless" style={{ minHeight: '300px' }}>
        <table className="table table-hover">
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
);

export default EntradaSeccion;

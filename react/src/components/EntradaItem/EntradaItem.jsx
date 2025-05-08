import React from 'react';

const EntradaItem = ({ iconClass, labelClass, description, date, link }) => (
  <tr>
    <td>
      <div className={`label label-sm ${labelClass}`}>
        <i className={iconClass}></i>
      </div>
    </td>
    <td>{description}</td>
    <td>{date}</td>
  </tr>
);

export default EntradaItem;

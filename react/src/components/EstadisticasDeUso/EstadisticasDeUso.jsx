import React, { useState } from 'react';

const EstadisticasDeUso = () => {
  const [selectedOption, setSelectedOption] = useState('Hoy');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption caption-md">
          <i className="icon-bar-chart theme-font hide"></i>
          <span className="caption-subject theme-font bold uppercase">Estadísticas de uso</span>
          <span className="caption-helper hide">frente a incidencias...</span>
        </div>
        <div className="actions">
          <div className="btn-group btn-group-devided" data-toggle="buttons">
            <label className={`btn btn-transparent grey-salsa btn-circle btn-sm ${selectedOption === 'Hoy' ? 'active' : ''}`}>
              <input type="radio" name="options" className="toggle" id="Hoy" onChange={handleOptionChange} checked={selectedOption === 'Hoy'} />
              Hoy
            </label>
            <label className={`btn btn-transparent grey-salsa btn-circle btn-sm ${selectedOption === 'Semana' ? 'active' : ''}`}>
              <input type="radio" name="options" className="toggle" id="Semana" onChange={handleOptionChange} checked={selectedOption === 'Semana'} />
              Semana
            </label>
            <label className={`btn btn-transparent grey-salsa btn-circle btn-sm ${selectedOption === 'Mes' ? 'active' : ''}`}>
              <input type="radio" name="options" className="toggle" id="Mes" onChange={handleOptionChange} checked={selectedOption === 'Mes'} />
              Mes
            </label>
          </div>
        </div>
      </div>
      <div className="portlet-body">
        <div className="row list-separated">
          <div className="col-md-offset-3 col-md-3 col-sm-6 col-xs-6">
            <div className="font-grey-mint font-sm">Usos</div>
            <div className="uppercase font-hg font-green-soft ng-binding">
              {/* Aquí puedes colocar el valor dinámico de Usos */}
              {selectedOption === 'Hoy' && 'Valor para hoy'}
              {selectedOption === 'Semana' && 'Valor para esta semana'}
              {selectedOption === 'Mes' && 'Valor para este mes'}
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="font-grey-mint font-sm">Incidencias</div>
            <div className="uppercase font-hg theme-font ng-binding">
              {/* Aquí puedes colocar el valor dinámico de Incidencias */}
              {selectedOption === 'Hoy' && 'Incidencias de hoy'}
              {selectedOption === 'Semana' && 'Incidencias de la semana'}
              {selectedOption === 'Mes' && 'Incidencias del mes'}
            </div>
          </div>
        </div>
        <div id="sales_statistics" className="portlet-body-morris-fit morris-chart" style={{ height: '260px' }}>
          {/* Aquí puedes integrar tu gráfico (por ejemplo, usando la librería Morris.js) */}
          {/* Ejemplo: <Morris.Line data={data} options={options} /> */}
        </div>
      </div>
    </div>
  );
};

export default EstadisticasDeUso;

import { useState, useEffect } from 'react';

const DetallesMaquina = ({ id }) => {
  console.log("ID recibido en el componente:", id);  // Verificar el valor de id

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error("ID no disponible");
      return;
    }

    const token = localStorage.getItem('token');

    fetch(`http://zapatero.es/api/v1/equipos/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Error ${response.status}: ${text}`);
          });
        }
        return response.json();
      })
      .then(responseData => {
        console.log("Respuesta de la API:", responseData);
        setData(responseData.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los detalles:', error);
        setError(`Hubo un problema: ${error.message}`);
        setLoading(false);
      });
  }, [id]);


  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Detalles de la Máquina</h1>
      {data && (
        <div>
          <p>Nombre: {data.nombre}</p>

          <div>
            <img
              src={`http://zapatero.es/storage/public/equipos/imagen/${data.imagen}`}
              alt={data.nombre}
              style={{ width: "500px", height: "auto", borderRadius: "8px" }}
            />
          </div>

          {data.descripcion && (
            <div>
              <img
                src={`http://zapatero.es/storage/public/equipos/descripcion/${data.descripcion}`}
                alt="Descripción de la máquina"
                style={{ width: "800px", height: "auto", borderRadius: "8px" }}
              />
            </div>
          )}

          <p>Activo: {data.activo ? 'Si':'No'}</p>
          <p>Reparación: {data.reparacion ? 'Si':'No'}</p>
          <p>Mantenimiento: {data.mantenimiento ? 'Si':'No'}</p>
        </div>
      )}
    </div>
  );

};

export default DetallesMaquina;

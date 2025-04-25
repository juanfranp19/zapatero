const API_URL = import.meta.env.VITE_API_URL;
const API_URL_EQUIPOS = API_URL + '/api/v1/equipos';

export const getEquipos = () => {
    return fetch(API_URL_EQUIPOS)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en getEquipos:', error);
            return 0;
        });
}

export const createEquipo = (datosEquipo) => {
    return fetch(API_URL_EQUIPOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosEquipo),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en createEquipo:', error);
            return 0;
        });
}

export const showEquipo = (equipoId) => {
    return fetch(`${API_URL_EQUIPOS}/${equipoId}`)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en showEquipo:', error);
            return 0;
        });
}

export const updateEquipo = (equipoId, datosEquipo) => {
    return fetch(`${API_URL_EQUIPOS}/${equipoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosEquipo),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en updateEquipo:', error);
            return 0;
        });
}

export const deleteEquipo = (equipoId) => {
    return fetch(`${API_URL_EQUIPOS}/${equipoId}`, {
        method: 'DELETE',
    })
        .then(response => {
            return 'Equipo eliminado correctamente';
        })
        .catch(error => {
            console.error('Error en deleteEquipo:', error);
            return 0;
        });
}

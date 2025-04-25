const API_URL = import.meta.env.VITE_API_URL;
const API_URL_TIPOS_EQUIPO = API_URL + '/api/v1/tipos_equipo';

export const getTipoEquipos = () => {
    return fetch(API_URL_TIPOS_EQUIPO)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en getTipoEquipos:', error);
            return 0;
        });
}

export const createTipoEquipo = (datosTipoEquipo) => {
    return fetch(API_URL_TIPOS_EQUIPO, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosTipoEquipo),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en createTipoEquipo:', error);
            return 0;
        });
}

export const showTipoEquipo = (tipoEquipoId) => {
    return fetch(`${API_URL_TIPOS_EQUIPO}/${tipoEquipoId}`)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en showTipoEquipo:', error);
            return 0;
        });
}

export const updateTipoEquipo = (tipoEquipoId, datosTipoEquipo) => {
    return fetch(`${API_URL_TIPOS_EQUIPO}/${tipoEquipoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosTipoEquipo),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en updateTipoEquipo:', error);
            return 0;
        });
}

export const deleteTipoEquipo = (tipoEquipoId) => {
    return fetch(`${API_URL_TIPOS_EQUIPO}/${tipoEquipoId}`, {
        method: 'DELETE',
    })
        .then(response => {
            return 'TipoEquipo eliminado correctamente';
        })
        .catch(error => {
            console.error('Error en deleteTipoEquipo:', error);
            return 0;
        });
}

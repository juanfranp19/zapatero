const API_URL = import.meta.env.VITE_API_URL;
const API_URL_AVISOS = API_URL + '/api/v1/avisos';

export const getAvisos = () => {
    return fetch(API_URL_AVISOS)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en getAvisos:', error);
            return 0;
        });
}

export const createAviso = (datosAviso) => {
    return fetch(API_URL_AVISOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAviso),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en createAviso:', error);
            return 0;
        });
}

export const showAviso = (avisoId) => {
    return fetch(`${API_URL_AVISOS}/${avisoId}`)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en showAviso:', error);
            return 0;
        });
}

export const updateAviso = (avisoId, datosAviso) => {
    return fetch(`${API_URL_AVISOS}/${avisoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAviso),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en updateAviso:', error);
            return 0;
        });
}

export const deleteAviso = (avisoId) => {
    return fetch(`${API_URL_AVISOS}/${avisoId}`, {
        method: 'DELETE',
    })
        .then(response => {
            return 'Aviso eliminado correctamente';
        })
        .catch(error => {
            console.error('Error en deleteAviso:', error);
            return 0;
        });
}

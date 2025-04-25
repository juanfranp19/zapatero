const API_URL = import.meta.env.VITE_API_URL;
const API_URL_SALAS = API_URL + '/api/v1/salas';

export const getSalas = () => {
    return fetch(API_URL_SALAS)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en getSalas:', error);
            return 0;
        });
}

export const createSala = (datosSala) => {
    return fetch(API_URL_SALAS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosSala),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en createSala:', error);
            return 0;
        });
}

export const showSala = (salaId) => {
    return fetch(`${API_URL_SALAS}/${salaId}`)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en showSala:', error);
            return 0;
        });
}

export const updateSala = (salaId, datosSala) => {
    return fetch(`${API_URL_SALAS}/${salaId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosSala),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en updateSala:', error);
            return 0;
        });
}

export const deleteSala = (salaId) => {
    return fetch(`${API_URL_SALAS}/${salaId}`, {
        method: 'DELETE',
    })
        .then(response => {
            return 'Sala eliminado correctamente';
        })
        .catch(error => {
            console.error('Error en deleteSala:', error);
            return 0;
        });
}

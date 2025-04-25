const API_URL = import.meta.env.VITE_API_URL;
const API_URL_TRABAJADORES = API_URL + '/api/v1/trabajadores';

export const getTrabajadores = () => {
    return fetch(API_URL_TRABAJADORES)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en getTrabajadores:', error);
            return 0;
        });
}

export const createTrabajador = (datosTrabajador) => {
    return fetch(API_URL_TRABAJADORES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosTrabajador),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en createTrabajador:', error);
            return 0;
        });
}

export const showTrabajador = (trabajadorId) => {
    return fetch(`${API_URL_TRABAJADORES}/${trabajadorId}`)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en showTrabajador:', error);
            return 0;
        });
}

export const updateTrabajador = (trabajadorId, datosTrabajador) => {
    return fetch(`${API_URL_TRABAJADORES}/${trabajadorId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosTrabajador),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en updateTrabajador:', error);
            return 0;
        });
}

export const deleteTrabajador = (trabajadorId) => {
    return fetch(`${API_URL_TRABAJADORES}/${trabajadorId}`, {
        method: 'DELETE',
    })
        .then(response => {
            return 'Trabajador eliminado correctamente';
        })
        .catch(error => {
            console.error('Error en deleteTrabajador:', error);
            return 0;
        });
}

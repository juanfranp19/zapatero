const API_URL = import.meta.env.VITE_API_URL;
const API_URL_ACCESOS = API_URL + '/api/v1/accesos';

export const getAccesos = () => {
    return fetch(API_URL_ACCESOS)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en getAccesos:', error);
            return 0;
        });
}

export const createAcceso = (datosAcceso) => {
    return fetch(API_URL_ACCESOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAcceso),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en createAcceso:', error);
            return 0;
        });
}

export const showAcceso = (accesoId) => {
    return fetch(`${API_URL_ACCESOS}/${accesoId}`)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en showAcceso:', error);
            return 0;
        });
}

export const updateAcceso = (accesoId, datosAcceso) => {
    return fetch(`${API_URL_ACCESOS}/${accesoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAcceso),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en updateAcceso:', error);
            return 0;
        });
}

export const deleteAcceso = (accesoId) => {
    return fetch(`${API_URL_ACCESOS}/${accesoId}`, {
        method: 'DELETE',
    })
        .then(response => {
            return 'Acceso eliminado correctamente';
        })
        .catch(error => {
            console.error('Error en deleteAcceso:', error);
            return 0;
        });
}

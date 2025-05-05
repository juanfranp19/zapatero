import { useState, useEffect } from 'react';
import { getSalas, createSala, showSala, updateSala, deleteSala } from '../services/salaService';

const useSala = () => {
    const [salas, setSalas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtener todos los tipos de equipo
    const fetchSalas = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getSalas();
            console.log(data);
            setSalas(data);
        } catch (error) {
            console.error('error al obtener los tipos de equipo:', error);
        } finally {
            setLoading(false);
        }
    };

    // Crear un nuevo tipo de equipo
    const handleCreateSala = async (datosSala) => {
        setLoading(true);
        setError(null);
        try {
            const data = await createSala(datosSala);
            setSalas((prev) => [...prev, data]); // Añadir el nuevo tipo de equipo
        } catch (error) {
            console.error('Error al crear el tipo de equipo:', error);
            setError('Error al crear el tipo de equipo');
        } finally {
            setLoading(false);
        }
    };

    // Obtener un tipo de equipo por ID
    const fetchSala = async (SalaId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await showSala(SalaId);
            return data;
        } catch (error) {
            console.error('Error al obtener el tipo de equipo:', error);
            setError('Error al obtener el tipo de equipo');
        } finally {
            setLoading(false);
        }
    };

    // Actualizar un tipo de equipo
    const handleUpdateSala = async (SalaId, datosSala) => {
        setLoading(true);
        setError(null);
        try {
            const data = await updateSala(SalaId, datosSala);
            setSalas((prev) =>
                prev.map((tipo) =>
                    tipo.id === SalaId ? { ...tipo, ...data } : tipo
                )
            );
        } catch (error) {
            console.error('Error al actualizar el tipo de equipo:', error);
            setError('Error al actualizar el tipo de equipo');
        } finally {
            setLoading(false);
        }
    };

    // Eliminar un tipo de equipo
    const handleDeleteSala = async (SalaId) => {
        setLoading(true);
        setError(null);
        try {
            await deleteSala(SalaId);
            setSalas((prev) => prev.filter((tipo) => tipo.id !== SalaId)); // Eliminar de la lista
        } catch (error) {
            console.error('Error al eliminar el tipo de equipo:', error);
            setError('Error al eliminar el tipo de equipo');
        } finally {
            setLoading(false);
        }
    };

    // Cargar los tipos de equipo al montar el hook
    useEffect(() => {
        fetchSalas();
    }, []);

    return {
        salas,
        loading,
        error,
        fetchSalas,
        handleCreateSala,
        fetchSala,
        handleUpdateSala,
        handleDeleteSala,
    };
};

export default useSala;

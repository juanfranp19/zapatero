import { useState, useEffect } from 'react';
import { getTipoEquipos, createTipoEquipo, showTipoEquipo, updateTipoEquipo, deleteTipoEquipo } from '../services/tipoEquipoService';

const useTipoEquipo = () => {
    const [tiposEquipo, setTiposEquipo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtener todos los tipos de equipo
    const fetchTiposEquipo = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getTipoEquipos();
            console.log(data);
            setTiposEquipo(data);
        } catch (error) {
            console.error('error al obtener los tipos de equipo:', error);
        } finally {
            setLoading(false);
        }
    };

    // Crear un nuevo tipo de equipo
    const handleCreateTipoEquipo = async (datosTipoEquipo) => {
        setLoading(true);
        setError(null);
        try {
            const data = await createTipoEquipo(datosTipoEquipo);
            setTiposEquipo((prev) => [...prev, data]); // Añadir el nuevo tipo de equipo
        } catch (error) {
            console.error('Error al crear el tipo de equipo:', error);
            setError('Error al crear el tipo de equipo');
        } finally {
            setLoading(false);
        }
    };

    // Obtener un tipo de equipo por ID
    const fetchTipoEquipo = async (tipoEquipoId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await showTipoEquipo(tipoEquipoId);
            return data;
        } catch (error) {
            console.error('Error al obtener el tipo de equipo:', error);
            setError('Error al obtener el tipo de equipo');
        } finally {
            setLoading(false);
        }
    };

    // Actualizar un tipo de equipo
    const handleUpdateTipoEquipo = async (tipoEquipoId, datosTipoEquipo) => {
        setLoading(true);
        setError(null);
        try {
            const data = await updateTipoEquipo(tipoEquipoId, datosTipoEquipo);
            setTiposEquipo((prev) =>
                prev.map((tipo) =>
                    tipo.id === tipoEquipoId ? { ...tipo, ...data } : tipo
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
    const handleDeleteTipoEquipo = async (tipoEquipoId) => {
        setLoading(true);
        setError(null);
        try {
            await deleteTipoEquipo(tipoEquipoId);
            setTiposEquipo((prev) => prev.filter((tipo) => tipo.id !== tipoEquipoId)); // Eliminar de la lista
        } catch (error) {
            console.error('Error al eliminar el tipo de equipo:', error);
            setError('Error al eliminar el tipo de equipo');
        } finally {
            setLoading(false);
        }
    };

    // Cargar los tipos de equipo al montar el hook
    useEffect(() => {
        fetchTiposEquipo();
    }, []);

    return {
        tiposEquipo,
        loading,
        error,
        fetchTiposEquipo,
        handleCreateTipoEquipo,
        fetchTipoEquipo,
        handleUpdateTipoEquipo,
        handleDeleteTipoEquipo,
    };
};

export default useTipoEquipo;

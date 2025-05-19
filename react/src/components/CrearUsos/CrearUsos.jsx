import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useGetEquipos } from '../../hooks/useEquipo';
import { useGetSalas } from '../../hooks/useSala';

import './CrearUsos.css';

const CrearUsos = (props) => {

    const { equipos, cargando: cargandoEquipos } = useGetEquipos();
    const { salas, cargando: cargandoSalas } = useGetSalas();

    /**
     * Funciones de autocompletado
     */
    // asigna el valor de fecha al campo fecha_uso
    function autocompletarFechaUso() {

        const hoy = new Date();
        // de la fecha de hoy, la pasa a formato YYYY-MM-DD
        const fechaHoy = hoy.toISOString().split('T')[0];
        // le da valor al campo
        setValue(USO.FECHA_USO, fechaHoy);
    }

    // asigna el valor de hora al campo hora_inicio
    function autocompletarHoraInicio() {

        const hoy = new Date();
        // de la hora actual, la pasa a formato HH:mm
        const horaHoy = hoy.toTimeString().split(' ')[0].substring(0, 5);
        // le da valor al campo
        setValue(USO.HORA_INICIO, horaHoy);
    }

    useEffect(() => {
        autocompletarFechaUso();
        autocompletarHoraInicio();
    }, []);

    // resetea valores que el botón reset ni react hook form pueden
    function resetarValores() {

        setValue(USO.FECHA_USO, null);
        setValue(USO.HORA_INICIO, null);
        setValue(USO.HORA_FIN, null);
        setValue(USO.SALA_ID, null);
        setValue(USO.EQUIPO_ID, null);
    }

    /**
     * Options de Select
     */
    function optionsSala() {

        if (!Array.isArray(salas)) {
            console.warn('salas no es un array:', salas);
            return <option disabled>No hay opciones</option>;
        }

        if (cargandoSalas) {
            return <option disabled>Cargando...</option>;
        }

        // a partir de los datos llamados de la API, genera los options del select
        return salas.map((sala) => (
            <option key={sala.id} value={sala.id}>{sala.nombre}</option>
        ));
    }

    function optionsEquipo() {

        if (!Array.isArray(equipos)) {
            console.warn('equipos no es un array:', equipos);
            return <option disabled>No hay opciones</option>;
        }

        if (cargandoEquipos) {
            return <option disabled>Cargando...</option>;
        }

        // a partir del value del campo origen, obtenemos los options del select
        const resultadoEquipos = (
            equipos
                .filter((equipo) => equipo.sala.id === +watch(USO.SALA_ID))
                .map((equipo) => (
                    <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
                ))
        );

        if (resultadoEquipos.length <= 0) return <option disabled>No hay opciones</option>;

        return resultadoEquipos;
    }

    /**
     * Manejadores de Select
     */
    function manejarSelectSala(e) {
        // la da el valor al modelo
        setValue(USO.SALA_ID, e.target.value);
        // fuerza la comprobación del input hidden
        trigger(USO.SALA_ID);
    }

    function manejarSelectEquipo(e) {
        // la da el valor al modelo
        setValue(USO.EQUIPO_ID, e.target.value);
        // fuerza la comprobación del input hidden
        trigger(USO.EQUIPO_ID);
    }

    // modelo de Uso
    const USO = {
        FECHA_USO: 'fecha_uso',
        HORA_INICIO: 'hora_inicio',
        HORA_FIN: 'hora_fin',
        SALA_ID: 'sala_id',
        EQUIPO_ID: 'equipo_id',
    }

    // Uso en su estado inicial
    const USOINICIAL = {
        fecha_uso: '',
        hora_inicio: '',
        hora_fin: '',
        sala_id: '',
        equipo_id: '',
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        trigger,
    } = useForm({ defaulValues: USOINICIAL });

    const manejarFormulario = handleSubmit((nuevoUso) => {

        // manda por consola los datos del nuevo uso
        console.log(nuevoUso);

        // manda los datos a la funcion que llama al servicio
        props.manejarCrearUso(nuevoUso);
    });

    return (
        <div className='dropdown-container crear-usos' >

            {/* botón para abrir el desplegable */}
            <button
                type='button'
                className='btn btn-primary dropdown-toggle mb-2'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                disabled={props.disabled}
            >
                Crear uso
            </button>

            {/* formulario */}
            <form className='dropdown-menu p-4' onSubmit={manejarFormulario}>

                {/* campo fecha_uso */}
                <div className='campo mb-2'>
                    <label htmlFor={USO.FECHA_USO} className='label-titulo'>Fecha Uso</label>
                    <input id={USO.FECHA_USO} className='form-control form-filter' type='date'
                        {...register(USO.FECHA_USO, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.fecha_uso?.message}</span>
                </div>

                {/* campo hora_inicio */}
                <div className='campo mb-2'>
                    <label htmlFor={USO.HORA_INICIO} className='label-titulo'>Hora inicio</label>
                    <input id={USO.HORA_INICIO} type='time' className='form-control form-filter'
                        {...register(USO.HORA_INICIO, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.hora_inicio?.message}</span>
                </div>

                {/* campo hora_fin */}
                <div className='campo mb-2'>
                    <label htmlFor={USO.HORA_FIN} className='label-titulo'>Hora fin</label>
                    <input id={USO.HORA_FIN} type='time' className='form-control form-filter'
                        {...register(USO.HORA_FIN)}
                    />
                    <span className='input-error'>{errors.hora_fin?.message}</span>
                </div>

                <div className='campo mb-2'>
                    <label className='label-titulo' htmlFor={USO.SALA_ID}>Sala</label>
                    <select id={USO.SALA_ID} name={USO.SALA_ID} className='form-control form-filter' onChange={manejarSelectSala}>
                        <option value="">Selecciona la sala donde se encuentra el equipo</option>
                        {optionsSala()}
                    </select>
                    <input type='hidden'
                        {...register(USO.SALA_ID, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.sala_id?.message}</span>
                </div>

                <div className='campo mb-3'>
                    <label className='label-titulo' htmlFor={USO.EQUIPO_ID}>Equipo</label>
                    <select id={USO.EQUIPO_ID} name={USO.EQUIPO_ID} className='form-control form-filter' onChange={manejarSelectEquipo}>
                        <option value="">Selecciona el equipo</option>
                        {optionsEquipo()}
                    </select>
                    <input type='hidden'
                        {...register(USO.EQUIPO_ID, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.equipo_id?.message}</span>
                </div>
                <div className="botones">
                    <button type='submit' className='btn btn-primary'
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {props.cargando ? 'cargando' : 'Crear'}
                    </button>

                    <button type='reset' className='btn btn-secondary'
                        onClick={(e) => {
                            e.stopPropagation();
                            resetarValores();
                        }}
                    >
                        Reset
                    </button>
                </div>
                {/*JSON.stringify(watch())*/}
            </form>
        </div>
    );

}

export default CrearUsos;

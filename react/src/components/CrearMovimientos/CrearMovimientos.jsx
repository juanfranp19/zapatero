import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useGetEquipos } from '../../hooks/useEquipo';
import { useGetSalas } from '../../hooks/useSala';

const CrearMovimientos = (props) => {

    const { equipos, cargando: cargandoEquipos } = useGetEquipos();
    const { salas, cargando: cargandoSalas } = useGetSalas();

    // asigna el valor de fecha y hora al campo fecha
    function autocompletarFecha() {

        const hoy = new Date();
        // de la fecha de hoy, la pasa a formato YYYY-MM-DD
        const fechaHoy = hoy.toISOString().split('T')[0];
        // de la hora actual, la pasa a formato HH:mm
        const horaHoy = hoy.toTimeString().split(' ')[0].substring(0, 5);
        // los junta
        const fechaHoraHoy = `${fechaHoy} ${horaHoy}`;
        // le da valor al campo
        setValue(MOVIMIENTO.FECHA, fechaHoraHoy);
    }

    // resetea valores que el botón reset ni react hook form pueden
    function resetarValores() {

        setValue(MOVIMIENTO.ORIGEN, null);
        setValue(MOVIMIENTO.EQUIPO_ID, null);
        setValue(MOVIMIENTO.DESTINO, null);
    }

    /**
     * Options de Selects
     */
    function optionsOrigen() {

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
            .filter((equipo) => equipo.sala.id === +watch(MOVIMIENTO.ORIGEN))
            .map((equipo) => (
                <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
            ))
        );

        if (resultadoEquipos.length <= 0) return <option disabled>No hay opciones</option>;

        return resultadoEquipos;
    }

    function optionsDestino() {

        if (!Array.isArray(salas)) {
            console.warn('salas no es un array:', salas);
            return <option disabled>No hay opciones</option>;
        }

        if (cargandoSalas) {
            return <option disabled>Cargando...</option>;
        }

        // a partir del value del campo origen, obtenemos los options del select
        const resultadosDestino = (
            salas
            .filter((sala) => sala.id !== +watch(MOVIMIENTO.ORIGEN))
            .map((sala) => (
                <option key={sala.id} value={sala.id}>{sala.nombre}</option>
            ))
        );

        return resultadosDestino;
    }

    /**
     * Manejadores de Selects
     */
    function manejarSelectOrigen(e) {
        // la da el valor al modelo
        setValue(MOVIMIENTO.ORIGEN, e.target.value);
        // fuerza la comprobación del input hidden
        trigger(MOVIMIENTO.ORIGEN);
    }

    function manejarSelectEquipo(e) {
        // la da el valor al modelo
        setValue(MOVIMIENTO.EQUIPO_ID, e.target.value);
        // fuerza la comprobación del input hidden
        trigger(MOVIMIENTO.EQUIPO_ID);
    }

    function manejarSelectDestino(e) {
        // la da el valor al modelo
        setValue(MOVIMIENTO.DESTINO, e.target.value);
        // fuerza la comprobación del input hidden
        trigger(MOVIMIENTO.DESTINO);
    }

    // modelo de movimiento
    const MOVIMIENTO = {
        FECHA: 'fecha',
        EQUIPO_ID: 'equipo_id',
        ORIGEN: 'origen',
        DESTINO: 'destino',
    }

    // movimiento en su estado inicial
    const MOVIMIENTOINICIAL = {
        fecha: '',
        equipo_id: '',
        origen: '',
        destino: '',
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        trigger,
    } = useForm({ defaulValues: MOVIMIENTOINICIAL });

    const manejarFormulario = handleSubmit((nuevoMovimiento) => {

        // manda por consola los datos del nuevo movimiento
        console.log(nuevoMovimiento);

        // manda los datos a la funcion que llama al servicio
        props.manejarCrearMovimiento(nuevoMovimiento);
    });

    useEffect(autocompletarFecha, []);

    return (

        <form className='col-12' id='crear-movimiento' onSubmit={manejarFormulario}>
            <div className='row'>

                <div className='col-12'>
                    <h1>Crear Movimiento</h1>
                </div>


                {/* campo fecha */}

                <div className='campo col-12 col-md-6'>
                    <label className='label-titulo' htmlFor={MOVIMIENTO.FECHA}>Fecha</label>
                    <input id={MOVIMIENTO.FECHA} className='form-control form-filter' type='datetime-local'
                        {...register(MOVIMIENTO.FECHA, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.fecha?.message}</span>
                </div>

                {/* campo origen */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={MOVIMIENTO.ORIGEN}>Origen</label>
                    <select id={MOVIMIENTO.ORIGEN} name={MOVIMIENTO.ORIGEN} className='form-control form-filter' onChange={manejarSelectOrigen}>
                        <option value="">Selecciona la sala de origen</option>
                        {optionsOrigen()}
                    </select>
                    <input type='hidden'
                        {...register(MOVIMIENTO.ORIGEN, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.origen?.message}</span>
                </div>

                {/* campo equipo_id */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={MOVIMIENTO.EQUIPO_ID}>Equipo</label>
                    <select id={MOVIMIENTO.EQUIPO_ID} name={MOVIMIENTO.EQUIPO_ID} className='form-control form-filter' onChange={manejarSelectEquipo}>
                        <option value="">Selecciona el equipo</option>
                        {optionsEquipo()}
                    </select>
                    <input type='hidden'
                        {...register(MOVIMIENTO.EQUIPO_ID, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.equipo_id?.message}</span>
                </div>

                {/* campo destino */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={MOVIMIENTO.DESTINO}>Destino</label>
                    <select id={MOVIMIENTO.DESTINO} name={MOVIMIENTO.DESTINO} className='form-control form-filter' onChange={manejarSelectDestino}>
                        <option value="">Selecciona la sala de destino</option>
                        {optionsDestino()}
                    </select>
                    <input type='hidden'
                        {...register(MOVIMIENTO.DESTINO, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.destino?.message}</span>
                </div>

            </div>
            <div className='row boton'>

                {/* boton crear */}

                <div className='campo col-12'>
                    <button type='submit' className='btn btn-primary'>
                        Crear Movimiento
                    </button>
                </div>

                {/* boton reset */}

                <div className='campo col-12'>
                    <button type='reset' className='btn btn-secondary' onClick={resetarValores}>
                        Resetear formulario
                    </button>
                </div>

            </div>
            {/*JSON.stringify(watch())*/}
        </form>
    );
}

export default CrearMovimientos;

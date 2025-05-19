import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useGetEquipo } from '../../hooks/useEquipo';
import { useGetUso } from '../../hooks/useUso';

import './UpdateUso.css';

const UpdateUso = (props) => {

    const { uso, cargando: cargandoUso } = useGetUso(props?.idUsando);
    const { equipo, cargando: cargandoEquipo } = useGetEquipo(uso?.equipo?.id);

    if (uso?.equipo?.id) console.log(equipo);

    // asigna el valor de hora al campo fin
    function autocompletarHoraFin() {

        const hoy = new Date();
        // de la hora actual, la pasa a formato HH:mm
        const horaHoy = hoy.toTimeString().split(' ')[0].substring(0, 5);
        // le da valor al campo
        setValue(USO.HORA_FIN, horaHoy);
    }

    // modelo de uso
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

    function asignarValores() {

        setValue(USO.FECHA_USO, uso.fecha_uso);
        setValue(USO.HORA_INICIO, uso.hora_inicio);
        setValue(USO.SALA_ID, equipo?.sala?.id);
        setValue(USO.EQUIPO_ID, equipo?.id);
    }

    const {
        register,
        handleSubmit,
        //watch,
        formState: { errors },
        setValue,
    } = useForm({ defaulValues: USOINICIAL });


    const manejarFormulario = handleSubmit((usoActualizado) => {

        // manda por consola los datos del nuevo uso
        console.log(usoActualizado);

        // manda los datos a la funcion que llama al servicio
        props.manejarActualizarUso(usoActualizado);
    });

    useEffect(asignarValores, [uso, equipo]);
    useEffect(autocompletarHoraFin, []);

    return (
        <div className='dropdown-container update-usos' >

            {/* botón para abrir el desplegable */}
            <button
                type='button'
                className='btn btn-secondary dropdown-toggle mb-2'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                disabled={props.disabled}
            >
                Finalizar uso
            </button>

            {/* formulario */}
            <form className='dropdown-menu p-4' onSubmit={manejarFormulario}>

                {/* campo fecha_uso */}
                <div className='campo mb-2'>
                    <label htmlFor={USO.FECHA_USO} className='label-titulo'>Fecha Uso</label>
                    <input id={USO.FECHA_USO} className='form-control form-filter' type='date'
                        disabled
                        {...register(USO.FECHA_USO)}
                    />
                </div>

                {/* campo hora_inicio */}
                <div className='campo mb-2'>
                    <label htmlFor={USO.HORA_INICIO} className='label-titulo'>Hora inicio</label>
                    <input id={USO.HORA_INICIO} type='time' className='form-control form-filter'
                        disabled
                        {...register(USO.HORA_INICIO)}
                    />
                </div>

                {/* campo hora_fin */}
                <div className='campo mb-2'>
                    <label htmlFor={USO.HORA_FIN} className='label-titulo'>Hora fin</label>
                    <input id={USO.HORA_FIN} type='time' className='form-control form-filter'
                        {...register(USO.HORA_FIN, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.hora_fin?.message}</span>
                </div>

                {/* campo sala */}

                {<div className='campo mb-2'>
                    <label className='label-titulo' htmlFor={USO.SALA_ID}>Sala</label>
                    <select id={USO.SALA_ID} name={USO.SALA_ID} className='form-control form-filter' disabled>
                        <option value={equipo?.sala?.id}>{cargandoEquipo ? 'cargando' : equipo?.sala?.nombre}</option>
                    </select>
                </div>}

                {/* campo equipo */}

                <div className='campo mb-3'>
                    <label className='label-titulo' htmlFor={USO.EQUIPO_ID}>Equipo</label>
                    <select id={USO.EQUIPO_ID} name={USO.EQUIPO_ID} className='form-control form-filter' disabled>
                        <option value={equipo.id}>{cargandoEquipo ? 'cargando' : equipo.nombre}</option>
                    </select>
                </div>

                <div className='botones'>
                    <button type='submit' className='btn btn-primary'
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {props.cargando ? 'cargando' : 'Finalizar'}
                    </button>
                </div>

                {/* JSON.stringify(watch()) */}
            </form>
        </div>
    );
}

export default UpdateUso;

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useGetTiposEquipo } from '../../hooks/useTipoEquipo';
import { useGetSalas } from '../../hooks/useSala';

const CrearEquipos = (props) => {

    const { tiposEquipo } = useGetTiposEquipo();
    const { salas } = useGetSalas();

    const [imagen, setImagen] = useState();
    const [descripcion, setDescripcion] = useState();

    function autocompletarFecha() {

        const hoy = new Date();
        // de la fecha de hoy, la pasa a formato YYYY-MM-DD
        const fechaHoy = hoy.toISOString().split('T')[0];
        // le da valor al campo
        setValue(EQUIPO.FECHA_INTEGRACION, fechaHoy);
    }

    /**
     *
     * Options de Selects
     */
    function optionsTiposEquipo() {

        if (!Array.isArray(tiposEquipo)) {
            console.warn('tiposEquipo is not an array:', tiposEquipo);
            return <option disabled>No options available</option>;
        }

        // a partir de los datos llamados de la API, genera los options del select
        return tiposEquipo.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
        ))
    }

    function optionsSalas() {

        if (!Array.isArray(salas)) {
            console.warn('salas is not an array:', salas);
            return <option disabled>No options available</option>;
        }

        // a partir de los datos llamados de la API, genera los options del select
        return salas.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
        ))

    }

    /**
     *
     * Funciones para manejar el valor de los input hidden
     */
    function manejarSelectTipoEquipo(e) {
        setValue(EQUIPO.TIPO_EQUIPO_ID, e.target.value);
        trigger(EQUIPO.TIPO_EQUIPO_ID);
    }

    function manejarSelectSala_id(e) {
        setValue(EQUIPO.SALA_ID, e.target.value);
        trigger(EQUIPO.SALA_ID);
    }

    function manejarSelectActivo(e) {
        setValue(EQUIPO.ACTIVO, e.target.value);
        trigger(EQUIPO.ACTIVO);
    }

    function manejarSelectMantinimiento(e) {
        setValue(EQUIPO.MANTENIMIENTO, e.target.value);
        trigger(EQUIPO.MANTENIMIENTO);
    }

    function manejarSelectReparacion(e) {
        setValue(EQUIPO.REPARACION, e.target.value);
        trigger(EQUIPO.REPARACION);
    }

    /**
     *
     * Funciones para los archivos
     */
    function manejarImagens(event) {
        console.log('sadsafadsfas');

        // el objeto con toda la info del archivo
        const selectedFile = event.target.files[0];
        console.log(selectedFile);
        // para que mustre debajo del input el nombre del archivo
        setImagen(selectedFile.name);
        // lo envía al modelo el objeto, porque por sí solo como otros inputs no puede
        setValue(EQUIPO.IMAGEN, selectedFile);
        trigger(EQUIPO.IMAGEN);
    }

    function manejarDescripcion(event) {

        // el objeto con toda la info del archivo
        const selectedFile = event.target.files[0];
        console.log(selectedFile);
        // para que mustre debajo del input el nombre del archivo
        setDescripcion(selectedFile.name);
        // lo envía al modelo el objeto, porque por sí solo como otros inputs no puede
        setValue(EQUIPO.DESCRIPCION, selectedFile);
        trigger(EQUIPO.DESCRIPCION);
    }

    function eliminarDescripcion() {
        // lo elimina del modelo
        setDescripcion(null);
        // elimina el value, y fuerza la validación
        setValue(EQUIPO.DESCRIPCION, null);
        trigger(EQUIPO.DESCRIPCION);
    }

    function eliminarImagen() {
        // lo elimina del modelo
        setImagen(null);
        // elimina el value, y fuerza la validación
        setValue(EQUIPO.IMAGEN, null);
        trigger(EQUIPO.IMAGEN);
    }

    // modelo
    const EQUIPO = {
        NOMBRE: "nombre",
        DESCRIPCION: "descripcion",
        TIPO_EQUIPO_ID: "tipo_equipo_id",
        SALA_ID: "sala_id",
        IMAGEN: "imagen",
        FECHA_INTEGRACION: "fecha_integracion",
        ACTIVO: "activo",
        REPARACION: "reparacion",
        MANTENIMIENTO: "mentenimiento",
    }

    // equipo en su estado inicial
    const EQUIPOINICIAL = {
        nombre: "",
        descripcion: "",
        tipo_equipo_id: "",
        sala_id: "",
        imagen: "",
        fecha_integracion: "",
        activo: "",
        reparacion: "",
        mentenimiento: "",
    }

    const {
        register,
        handleSubmit,
        //watch,
        formState: { errors },
        setValue,
        trigger,
    } = useForm({ defaulValues: EQUIPOINICIAL });

    const manejarFormulario = handleSubmit((nuevoEquipo) => {

        // devuelve la información que hay en los campos del Login, en JSON
        console.log(nuevoEquipo);

        // manda los datos a la función de SOCIO.jsx
        props.manejarCrearEquipo(nuevoEquipo);
    });

    useEffect(autocompletarFecha, []);

    return (
        <form className="col-12" id='crear-equipo' onSubmit={manejarFormulario} >
            <div className="row">
                <div className="col-12">
                    <h1>Crear equipo</h1>
                </div>

                {/* campo nombre */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={EQUIPO.NOMBRE}>Nombre</label>
                    <input id={EQUIPO.NOMBRE} type="text" className='form-control form-filter input-sm'

                        {...register(EQUIPO.NOMBRE, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}

                    />
                    <span className='input-error'>{errors.nombre?.message}</span>
                </div>

                {/* campo descripcion */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={EQUIPO.DESCRIPCION}>Descripción</label>
                    <input id={EQUIPO.DESCRIPCION} type="file" accept="image/*" className='form-control form-filter' onChange={manejarDescripcion} />
                    {descripcion &&
                        <>
                            <span className='fw-bold'>Archivo seleccionado:</span> {descripcion}
                            <button className='btn' onClick={eliminarDescripcion}><i className="bi bi-file-earmark-minus eliminar-imagen"></i></button>
                        </>
                    }
                    <input type='hidden'
                    /* {...register(EQUIPO.DESCRIPCION, {
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio',
                        },
                    })} */
                    />
                    <span className='input-error'>{errors.descripcion?.message}</span>
                </div>

                {/* campo tipo equipo id */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={EQUIPO.TIPO_EQUIPO_ID}>Tipo</label>
                    <select id={EQUIPO.TIPO_EQUIPO_ID} name={EQUIPO.TIPO_EQUIPO_ID} className='form-control form-filter' onChange={manejarSelectTipoEquipo}>
                        <option value="">Selecciona un tipo de equipo</option>
                        {optionsTiposEquipo()}
                    </select>
                    <input type='hidden'
                        {...register(EQUIPO.TIPO_EQUIPO_ID, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.tipo_equipo_id?.message}</span>
                </div>

                {/* campo sala_id */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={EQUIPO.SALA_ID}>Sala</label>
                    <select id={EQUIPO.SALA_ID} name={EQUIPO.SALA_ID} className='form-control form-filter' onChange={manejarSelectSala_id}>
                        <option value="">Selecciona una sala</option>
                        {optionsSalas()}
                    </select>
                    <input type='hidden'
                        {...register(EQUIPO.SALA_ID, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.sala_id?.message}</span>
                </div>

                {/* campo imagen */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={EQUIPO.IMAGEN}>Imágen</label>
                    <input id={EQUIPO.IMAGEN} type="file" accept="image/*" className='form-control form-filter' onChange={manejarImagens} />
                    {imagen &&
                        <>
                            <span className='fw-bold'>Archivo seleccionado:</span> {imagen}
                            <button className='btn' onClick={eliminarImagen}><i className="bi bi-file-earmark-minus eliminar-imagen"></i></button>
                        </>
                    }
                    <input type='hidden'
                    /* {...register(EQUIPO.IMAGEN, {
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio',
                        },
                    })} */
                    />
                    <span className='input-error'>{errors.imagen?.message}</span>
                </div>

                {/* compo fecha_integración */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={EQUIPO.FECHA_INTEGRACION}>Fecha de Integración</label>
                    <input id={EQUIPO.FECHA_INTEGRACION} className='form-control form-filter' type='date'
                        {...register(EQUIPO.FECHA_INTEGRACION, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.fecha_integracion?.message}</span>
                </div>

                {/* campo activo */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={EQUIPO.ACTIVO}>Activo</label>
                    <div>
                        <input id="equipo-activo-true" name={EQUIPO.ACTIVO} type="radio" value="1" className="form-check-input" onChange={manejarSelectActivo} />
                        <label htmlFor="equipo-activo-true">Sí</label>
                    </div>
                    <div>
                        <input id="equipo-activo-false" name={EQUIPO.ACTIVO} type="radio" value="0" className="form-check-input" onChange={manejarSelectActivo} />
                        <label htmlFor="equipo-activo-false">No</label>
                    </div>
                    <input type='hidden'
                        {...register(EQUIPO.ACTIVO, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.activo?.message}</span>
                </div>

                {/* campo reparación */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={EQUIPO.REPARACION}>Reparación</label>
                    <div>
                        <input id="equipo-reparacion-true" name={EQUIPO.REPARACION} type="radio" value="1" className="form-check-input" onChange={manejarSelectReparacion} />
                        <label htmlFor="equipo-reparacion-true">Sí</label>
                    </div>
                    <div>
                        <input id="equipo-reparacion-false" name={EQUIPO.REPARACION} type="radio" value="0" className="form-check-input" onChange={manejarSelectReparacion} />
                        <label htmlFor="equipo-reparacion-false">No</label>
                    </div>
                    <input type='hidden'
                        {...register(EQUIPO.REPARACION, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.reparacion?.message}</span>
                </div>

                {/* campo mantenimiento */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={EQUIPO.MANTENIMIENTO}>Mantenimiento</label>
                    <div>
                        <input id="equipo-mantenimiento-true" name={EQUIPO.MANTENIMIENTO} type="radio" value="1" className="form-check-input" onChange={manejarSelectMantinimiento} />
                        <label htmlFor="equipo-mantenimiento-true">Sí</label>
                    </div>
                    <div>
                        <input id="equipo-mantenimiento-false" name={EQUIPO.MANTENIMIENTO} type="radio" value="0" className="form-check-input" onChange={manejarSelectMantinimiento} />
                        <label htmlFor="equipo-mantenimiento-false">No</label>
                    </div>
                    <input type='hidden'
                        {...register(EQUIPO.MANTENIMIENTO, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.mentenimiento?.message}</span>
                </div>

            </div>

            <div className="row boton">

                {/* boton crear */}

                <div className="campo col-12">
                    <button type='submit' className='btn btn-primary'>
                        Crear Equipo
                    </button>
                </div>

            </div>
            {/* {JSON.stringify(watch())} */}
        </form>
    );
}

export default CrearEquipos;

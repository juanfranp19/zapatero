import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import useTipoEquipo from '../../hooks/useTipoEquipo';
import useSala from '../../hooks/useSala';

import './CrearEquipos.css';

const CrearEquipos = (props) => {

    const { tiposEquipo } = useTipoEquipo([]);
    const { salas } = useSala([]);

    function optionsTiposEquipo() {

        if (!Array.isArray(tiposEquipo)) {
            console.warn('tiposEquipo is not an array:', tiposEquipo);
            return <option disabled>No options available</option>;
        }

        return tiposEquipo.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
        ))
    }

    function optionsSalas() {

        if (!Array.isArray(salas)) {
            console.warn('salas is not an array:', salas);
            return <option disabled>No options available</option>;
        }

        return salas.map((sala) => (
            <option key={sala.id} value={sala.id}>{sala.nombre}</option>
        ))
    }

    // funciones para manejar el valor de los input hidden

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
        watch,
        formState: { errors },
        setValue,
        trigger,
    } = useForm({ defaulValues: EQUIPOINICIAL });

    const manejarFormulario = handleSubmit((nuevoEquipo) => {

        // devuelve la información que hay en los campos del Login, en JSON
        console.log(nuevoEquipo);

        // manda los datos a la función de SOCIO.jsx
        props.manejarCrearSocio(nuevoEquipo);
    });

    return (
        <div className='row'>

            <form className="col-12" id='crear-equipo' onSubmit={manejarFormulario} >
                <div className="row">
                    <div className="col-12">
                        <h1>Crear equipo</h1>
                    </div>

                    {/* campo nombre */}

                    <div className="campo col-12 col-md-6">
                        <label htmlFor={EQUIPO.NOMBRE}>Nombre</label>
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
                        <label htmlFor={EQUIPO.DESCRIPCION}>Descripción</label>
                        <input id={EQUIPO.DESCRIPCION} type="file" accept="image/*" className='form-control form-filter'

                            {...register(EQUIPO.DESCRIPCION, {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio',
                                },
                            })}

                        />
                        <span className='input-error'>{errors.descripcion?.message}</span>
                    </div>

                    {/* campo tipo equipo id */}

                    <div className="campo col-12 col-md-6">
                        <label htmlFor={EQUIPO.TIPO_EQUIPO_ID}>Tipo</label>
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
                        <label htmlFor={EQUIPO.SALA_ID}>Sala</label>
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
                        <label htmlFor={EQUIPO.IMAGEN}>Imágen</label>
                        <input id={EQUIPO.IMAGEN} type="file" accept="image/*" className='form-control form-filter'
                            {...register(EQUIPO.IMAGEN, {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio',
                                },
                            })}
                        />
                        <span className='input-error'>{errors.imagen?.message}</span>
                    </div>

                    {/* campo activo */}

                    <div className="campo col-12 col-md-6">
                        <label htmlFor={EQUIPO.ACTIVO}>Activo</label>
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
                        <label htmlFor={EQUIPO.REPARACION}>Reparación</label>
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
                        <label htmlFor={EQUIPO.MANTENIMIENTO}>Mantenimiento</label>
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

                    <div className="campo col-12 col-md-6">
                        <button type='submit' className='btn btn-primary'>
                            Crear Equipo
                        </button>
                    </div>

                </div>
                {JSON.stringify(watch())}
            </form>

        </div>
    );
}

export default CrearEquipos;

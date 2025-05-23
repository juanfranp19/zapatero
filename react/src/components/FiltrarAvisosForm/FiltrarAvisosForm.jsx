import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import AjaxLoader from '../AjaxLoader/AjaxLoader'

import { useAuth } from '../../hooks/useAuth';
import { useGetAvisos } from '../../hooks/useAviso';
import { useGetEquipos } from '../../hooks/useEquipo';

import './FiltrarAvisosForm.css';

const FiltrarAvisosForm = (props) => {

    const { user } = useAuth();
    const { avisos, cargando: cargandoAvisos } = useGetAvisos();
    const { equipos, cargando: cargandoEquipos } = useGetEquipos();

    const [modoEditar, setModoEditar] = useState(null);

    console.log('avisos:', avisos);

    function activarModoEditar(aviso) {
        // activa modo editar
        setModoEditar(aviso.id);

        // envía al formualrio los datos por defecto
        asignarValores(aviso.comentario, aviso.equipo.id);
    }

    function desactivarModoEditar() {
        // desactiva el modo de editar
        setModoEditar(false);
    }

    // formate el datetime del timestamp de laravel al formato 2025/05/23 10:52
    function formatearDiaHora(diaHora) {
        const formatted = diaHora.slice(0, 16).replace('T', ' ');
        return formatted;
    }

    // modelo de aviso
    const AVISO = {
        COMENTARIO: 'comentario',
        EQUIPO_ID: 'equipo_id',
        USER_ID: 'user_id',
    }

    // aviso en su estado inicial
    const AVISOINICIAL = {
        comentario: '',
        equipo_id: '',
        user_id: '',
    }

    const {
        register,
        handleSubmit,
        //watch,
        formState: { errors },
        setValue,
        trigger
    } = useForm({ defaulValues: AVISOINICIAL });

    // funciones para select
    function optionsEquipo() {

        if (!Array.isArray(equipos)) {
            console.warn('equipos no es un array:', equipos);
            return <option disabled>No hay opciones</option>;
        }

        if (cargandoEquipos) {
            return <option disabled>Cargando...</option>;
        }

        // obtenemos los options del select
        const resultadoEquipos = (
            equipos
                .map((equipo) => (
                    <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
                ))
        );

        if (resultadoEquipos.length <= 0) return <option disabled>No hay opciones</option>;

        return resultadoEquipos;
    }

    function manejarSelectEquipo(e) {
        // la da el valor al modelo
        setValue(AVISO.EQUIPO_ID, e.target.value);
        // fuerza la comprobación del input hidden
        trigger(AVISO.EQUIPO_ID);
    }

    // función que asigna los valores que van a tener por defecto el formulario
    function asignarValores(comentario, equipo_id) {

        setValue(AVISO.COMENTARIO, comentario);
        setValue(AVISO.EQUIPO_ID, equipo_id);
    }

    /* funciones que llaman al servidor en pages/Aviso.jsx */

    function eliminarAviso(aviso_id) {

        console.log(aviso_id);
        // le pasa el id del aviso
        props.manejarDeleteAviso(aviso_id);
    }

    const guardarCambios = handleSubmit((avisoActualizado) => {

        console.log(modoEditar);

        // le pasa el aviso actualizado y el id del aviso
        props.manejarActualizarAviso(avisoActualizado, modoEditar);

        desactivarModoEditar();
    });

    return (
        <div className='table-container'>
            <div style={{ overflowX: 'auto' }}>
                {cargandoAvisos ? (
                    <AjaxLoader />
                ) : (
                    <table className='table table-striped table-bordered table-hover' id='id-tabla-datos-avisos'>
                        <thead>
                            <tr className='heading'>

                                <th width='5%'>ID</th>
                                <th width='20%'>Comentario</th>
                                <th width='15%'>Equipo</th>
                                <th width='5%'>Usuario</th>
                                {/* <th width='10%'>Fecha de creado</th> */}
                                <th width='10%'>Última modificación</th>
                                <th width='10%'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {avisos.map((aviso) => (
                                <tr key={aviso.id}>

                                    {modoEditar === aviso.id
                                        ? (<>

                                            {/* editar aviso */}

                                            {/* campo id */}
                                            <td>
                                                <input id='aviso_id' className='form-control form-filter' type='text'
                                                    disabled value={aviso.id}
                                                />
                                            </td>

                                            {/* campo comentario */}
                                            <td>
                                                <textarea id={AVISO.COMENTARIO} className='form-control form-filter'
                                                    {...register(AVISO.COMENTARIO, {
                                                        required: {
                                                            value: true,
                                                            message: 'Este campo es obligatorio',
                                                        },
                                                    })}
                                                />
                                                <span className='input-error'>{errors.comentario?.message}</span>
                                            </td>

                                            {/* campo equipo */}
                                            <td>
                                                <select id={AVISO.EQUIPO_ID} name={AVISO.EQUIPO_ID} className='form-control form-filter' onChange={manejarSelectEquipo}>
                                                    <option value={AVISO.EQUIPO_ID}>{aviso.equipo.nombre}</option>
                                                    {optionsEquipo()}
                                                </select>
                                                <input type='hidden'
                                                    {...register(AVISO.EQUIPO_ID, {
                                                        required: {
                                                            value: true,
                                                            message: 'Este campo es obligatorio',
                                                        },
                                                    })}
                                                />
                                            </td>

                                            {/* campo user */}
                                            <td>
                                                <input id='aviso_user_id' className='form-control form-filter' type='text'
                                                    disabled value={aviso.user.name}
                                                />
                                            </td>

                                            {/* campo ultima modificacion */}
                                            <td>
                                                <input id='aviso_updated_at' className='form-control form-filter' type='text'
                                                    disabled value={aviso.updated_at}
                                                />
                                            </td>

                                        </>) : (<>

                                            {/* datos del aviso */}

                                            <td>{aviso.id}</td>
                                            <td>{aviso.comentario}</td>
                                            <td>{aviso.equipo.nombre}</td>
                                            <td>{aviso.user.name}</td>
                                            {/* <td>{formatearDiaHora(aviso.created_at)}</td> */}
                                            <td>{formatearDiaHora(aviso.updated_at)}</td>

                                        </>)
                                    }


                                    <td>
                                        {/* cambia solo la file del botón que se pulsa */}
                                        {modoEditar === aviso.id
                                            ? (<>

                                                <button
                                                    onClick={guardarCambios}
                                                    className='btn btn-sm btn-success'
                                                    // desabilitado para avisos que no ha creado el usuario auntenticado
                                                    disabled={user?.id !== aviso?.user?.id}
                                                >
                                                    <i class='bi bi-floppy' /> Guardar
                                                </button>

                                                <button
                                                    onClick={desactivarModoEditar}
                                                    className='btn btn-sm btn-danger'
                                                    // desabilitado para avisos que no ha creado el usuario auntenticado
                                                    disabled={user?.id !== aviso?.user?.id}
                                                >
                                                    <i className='fa fa-times' /> Cancelar
                                                </button>

                                            </>) : (<>

                                                <button
                                                    onClick={() => activarModoEditar(aviso)}
                                                    className='btn btn-sm btn-blue-dark'
                                                    // desabilitado para avisos que no ha creado el usuario auntenticado y para modo editar
                                                    disabled={user?.id !== aviso?.user?.id || modoEditar}
                                                >
                                                    <i className='fa fa-edit' /> Editar
                                                </button>

                                                <button
                                                    onClick={() => eliminarAviso(aviso.id)}
                                                    className='btn btn-sm btn-danger'
                                                    // desabilitado para avisos que no ha creado el usuario auntenticado y para modo editar
                                                    disabled={user?.id !== aviso?.user?.id || modoEditar}
                                                >
                                                    <i class='bi bi-trash3' /> Eliminar
                                                </button>

                                            </>)
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {/*JSON.stringify(watch())*/}
        </div>
    );
};

export default FiltrarAvisosForm;

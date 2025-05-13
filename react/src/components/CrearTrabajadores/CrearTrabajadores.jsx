import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CrearTrabajadores = (props) => {

    const [imagen, setImagen] = useState('');

    /**
     *
     * funciones para archivos
     */
    function manejarImagen(e) {

        // el objeto con toda la info del archivo
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        // para que muestre debajo del input el nombre del archivo
        setImagen(selectedFile.name);
        // lo envía al modelo el objeto, porque por sí solo como otros inputs no puede
        setValue(TRABAJADOR.IMAGEN, selectedFile);
        trigger(TRABAJADOR.IMAGEN);
    }

    function eliminarImagen() {
        // lo elimina del modelo
        setImagen(null);
        // elimina el value, y fuerza la validación
        setValue(TRABAJADOR.IMAGEN, null);
        trigger(TRABAJADOR.IMAGEN);
    }

    /**
     *
     * funciones para radios
     */
    function manejarRadioActivo(e) {
        setValue(TRABAJADOR.ACTIVO, e.target.value);
        trigger(TRABAJADOR.ACTIVO);
    }

    function manejarRadioBorrado(e) {
        setValue(TRABAJADOR.BORRADO, e.target.value);
        trigger(TRABAJADOR.BORRADO);
    }

    // modelo de trabajador
    const TRABAJADOR = {
        DNI: 'dni',
        NOMBRE: 'nombre',
        APELLIDOS: 'apellidos',
        ACTIVO: 'activo',
        BORRADO: 'borrado',
        IMAGEN: 'imagen'
    }

    // trabajador en su estado inicial
    const TRABAJADORINICIAL = {
        dni: '',
        nombre: '',
        apellidos: '',
        activo: '',
        borrado: '',
        imagen: '',
    }

    const {
        register,
        handleSubmit,
        //watch,
        formState: { errors },
        setValue,
        trigger,
    } = useForm({ defaulValues: TRABAJADORINICIAL });

    const manejarFormulario = handleSubmit((nuevoTrabajador) => {

        // manda por consola los datos del nuevo trabajador
        console.log(nuevoTrabajador);

        // manda los datos a la funcion que llama al servicio
        props.manejarCrearTrabajador(nuevoTrabajador);
    })

    return (
        <form className='col-12' id='crear-trabajador' onSubmit={manejarFormulario}>
            <div className="row">

                <div className="col-12">
                    <h1>Crear Trabajador</h1>
                </div>

                {/* campo dni */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={TRABAJADOR.DNI}>DNI</label>
                    <input id={TRABAJADOR.DNI} type="text" className='form-control form-filter input-sm'

                        {...register(TRABAJADOR.DNI, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                            pattern: {
                                value: /^[0-9]{8}[A-Z]$/,
                                message: 'Este campo debe seguir este patrón: 00000000A',
                            },
                        })}

                    />
                    <span className='input-error'>{errors.dni?.message}</span>
                </div>

                {/* campo nombre */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={TRABAJADOR.NOMBRE}>Nombre</label>
                    <input id={TRABAJADOR.NOMBRE} type="text" className='form-control form-filter input-sm'

                        {...register(TRABAJADOR.NOMBRE, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}

                    />
                    <span className='input-error'>{errors.nombre?.message}</span>
                </div>

                {/* campo apellidos */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={TRABAJADOR.APELLIDOS}>Apellidos</label>
                    <input id={TRABAJADOR.APELLIDOS} type="text" className='form-control form-filter input-sm'

                        {...register(TRABAJADOR.APELLIDOS, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}

                    />
                    <span className='input-error'>{errors.apellidos?.message}</span>
                </div>

                {/* campo activo */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={TRABAJADOR.ACTIVO}>Activo</label>
                    <div>
                        <input id="trabajador-activo-true" name={TRABAJADOR.ACTIVO} type="radio" value="1" className="form-check-input" onChange={manejarRadioActivo} />
                        <label htmlFor="trabajador-activo-true">Sí</label>
                    </div>
                    <div>
                        <input id="trabajador-activo-false" name={TRABAJADOR.ACTIVO} type="radio" value="0" className="form-check-input" onChange={manejarRadioActivo} />
                        <label htmlFor="trabajador-activo-false">No</label>
                    </div>
                    <input type='hidden'
                        {...register(TRABAJADOR.ACTIVO, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.activo?.message}</span>
                </div>

                {/* campo borrado */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={TRABAJADOR.BORRADO}>Borrado</label>
                    <div>
                        <input id="trabajador-borrado-true" name={TRABAJADOR.BORRADO} type="radio" value="1" className="form-check-input" onChange={manejarRadioBorrado} />
                        <label htmlFor="trabajador-borrado-true">Sí</label>
                    </div>
                    <div>
                        <input id="trabajador-borrado-false" name={TRABAJADOR.BORRADO} type="radio" value="0" className="form-check-input" onChange={manejarRadioBorrado} />
                        <label htmlFor="trabajador-borrado-false">No</label>
                    </div>
                    <input type='hidden'
                        {...register(TRABAJADOR.BORRADO, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.borrado?.message}</span>
                </div>

                {/* campo imagen */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={TRABAJADOR.IMAGEN}>Imágen</label>
                    <input id={TRABAJADOR.IMAGEN} type="file" accept="image/*" className='form-control form-filter' onChange={manejarImagen} />
                    {imagen &&
                        <>
                            <span className='fw-bold'>Archivo seleccionado:</span> {imagen}
                            <button className='btn' onClick={eliminarImagen}><i className="bi bi-file-earmark-minus eliminar-imagen"></i></button>
                        </>
                    }
                    <span className='input-error'>{errors.imagen?.message}</span>
                </div>

                {/*JSON.stringify(watch())*/}
            </div>

            <div className="row boton">

                {/* boton crear */}

                <div className="campo col-12">
                    <button type='submit' className='btn btn-primary'>
                        {props.cargando ? 'cargando' : 'Crear Trabajador'}
                    </button>
                </div>

                {/* boton reset */}

                <div className="campo col-12">
                    <button type='reset' className='btn btn-secondary'>
                        Reset
                    </button>
                </div>

            </div>
        </form>
    );
}

export default CrearTrabajadores;

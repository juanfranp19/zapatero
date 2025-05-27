import { useForm } from 'react-hook-form';
import { useGetEquipos } from '../../hooks/useEquipo';
import { useGetSalas } from '../../hooks/useSala';

const CrearAviso = (props) => {

    const { equipos, cargando: cargandoEquipos } = useGetEquipos();
    const { salas, cargando: cargandoSalas } = useGetSalas();

    /**
     *
     * Funciones de Selects
     */
    function optionsSalas() {

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
        ))
    }

    function optionsEquipos() {

        if (!Array.isArray(equipos)) {
            console.warn('equipos no es un array:', equipos);
            return <option disabled>No hay opciones</option>;
        }

        if (cargandoEquipos) {
            return <option disabled>Cargando...</option>;
        }

        // a partir de los datos llamados de la API, genera los options del select
        return equipos
            .filter((equipo) => (equipo.sala.id === +watch(AVISO.SALA_ID)))
            .map((equipo) => (
                <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
            ))
    }

    /**
     *
     * Funciones para manejar el valor de los input hidden
     */
    function manejarSelectSala_id(e) {
        setValue(AVISO.SALA_ID, e.target.value);
        trigger(AVISO.SALA_ID);
    }

    function manejarSelectEquipo_id(e) {
        setValue(AVISO.EQUIPO_ID, e.target.value);
        trigger(AVISO.EQUIPO_ID);
    }

    // modelo
    const AVISO = {
        COMENTARIO: 'comentario',
        SALA_ID: 'sala_id',
        EQUIPO_ID: 'equipo_id',
    }

    // aviso en su estado inicial
    const AVISOINICIAL = {
        comentario: '',
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
    } = useForm({ defaultValues: AVISOINICIAL });

    const manejarFormulario = handleSubmit((nuevoAviso) => {

        // devuelve la información que hay en los campos del Login, en JSON
        console.log(nuevoAviso);

        // manda los datos a la función de SOCIO.jsx
        props.manejarCrearAviso(nuevoAviso);
    });

    return (
        <form className="col-12" id="crearAviso" onSubmit={manejarFormulario}>
            <div className="row">
                <div className="col-12">
                    <h1>Crear Aviso</h1>
                </div>

                {/* campo comentario */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={AVISO.COMENTARIO}>Comentario</label>
                    <textarea id={AVISO.COMENTARIO} className='form-control form-filter input-sm'

                        {...register(AVISO.COMENTARIO, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}

                    />
                    <span className='input-error'>{errors.comentario?.message}</span>
                </div>

                {/* campo sala_id */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={AVISO.SALA_ID}>Sala</label>
                    <select id={AVISO.SALA_ID} name={AVISO.SALA_ID} className='form-control form-filter' onChange={manejarSelectSala_id}>
                        <option value="">Selecciona una sala</option>
                        {optionsSalas()}
                    </select>
                    <input type='hidden'
                        {...register(AVISO.SALA_ID, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.sala_id?.message}</span>
                </div>

                {/* campo equipo_id */}

                <div className="campo col-12 col-md-6">
                    <label className='label-titulo' htmlFor={AVISO.EQUIPO_ID}>Equipo</label>
                    <select id={AVISO.EQUIPO_ID} name={AVISO.EQUIPO_ID} className='form-control form-filter' onChange={manejarSelectEquipo_id}>
                        <option value="">Selecciona un equipo</option>
                        {optionsEquipos()}
                    </select>
                    <input type='hidden'
                        {...register(AVISO.EQUIPO_ID, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.equipo_id?.message}</span>
                </div>


            </div>

            <div className="row boton">

                {/* boton crear */}

                <div className="campo col-12">
                    <button type='submit' className='btn btn-primary'>
                        Crear Aviso
                    </button>
                </div>

            </div>
            {/* JSON.stringify(watch()) */}
        </form>
    );

}

export default CrearAviso;

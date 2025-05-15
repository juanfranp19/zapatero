import { useForm } from 'react-hook-form';

import { useGetRoles } from '../../hooks/useRol';
import { useGetTrabajadores } from '../../hooks/useTrabajador';

const CrearUser = (props) => {

    const { roles, cargando: cargandoRoles } = useGetRoles();
    const { trabajadores, cargando: cargandoTrabajadores } = useGetTrabajadores();

    /**
     *
     * Options de los Select
     */
    function optionsRol() {

        if (!Array.isArray(roles)) {
            console.warn('roles no es un array:', roles);
            return <option disabled>No hay opciones</option>;
        }

        if (cargandoRoles) {
            return <option disabled>Cargando...</option>;
        }

        // a partir de los datos llamados de la API, genera los options del select
        return roles.map((rol) => (
            <option key={rol.id} value={rol.id}>{rol.nombre}</option>
        ))
    }

    function optionsTrabajadores() {

        if (!Array.isArray(trabajadores)) {
            console.warn('trabajadores no es un array:', trabajadores);
            return <option disabled>No hay opciones</option>;
        }

        if (cargandoTrabajadores) {
            return <option disabled>Cargando...</option>;
        }

        // a partir de los datos llamados de la API, genera los options del select
        return trabajadores
            .filter((trabajador) => trabajador.user === null)
            .map((trabajador) => (
                <option key={trabajador.id} value={trabajador.id}>{trabajador.nombre} {trabajador.apellidos}</option>
            ));
    }

    /**
     *
     * Manejadores de los Select
     */
    function manejarSelectRol(e) {
        setValue(USER.ROL_ID, e.target.value);
        trigger(USER.ROL_ID);
    }

    function manejarSelectTrabajador(e) {
        setValue(USER.TRABAJADOR, e.target.value);
        trigger(USER.TRABAJADOR);
    }

    // modelo
    const USER = {
        NAME: 'name',
        EMAIL: 'email',
        PASSWORD: 'password',
        PASSWORD_CONFIRMATION: 'password_confirmation',
        ROL_ID: 'rol_id',
        TRABAJADOR: 'trabajador',
    }

    // user en su estado inicial
    const USERINICIAL = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        rol_id: '',
        trabajador: '',
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        trigger,
    } = useForm({ defaultValues: USERINICIAL });

    const manejarFormulario = handleSubmit((nuevoUser) => {

        // manda por consola los datos del nuevo user
        console.log(nuevoUser);

        // manda los datos a la funcion que llama al servicio
        props.manejarCrearUser(nuevoUser);
    })

    return (

        <form className='col-12' id='crear-user' onSubmit={manejarFormulario}>
            <div className='row'>

                <div className='col-12'>
                    <h3>Crear usuario</h3>
                </div>

                {/* campo usuario */}

                <div className='campo col-12 col-md-6'>
                    <label className='label-titulo' htmlFor={USER.NAME}>Nombre de usuario</label>
                    <input id={USER.NAME} type='text' className='form-control form-filter input-sm'

                        {...register(USER.NAME, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}

                    />
                    <span className='input-error'>{errors.name?.message}</span>
                </div>

                {/* campo email */}

                <div className='campo col-12 col-md-6'>
                    <label className='label-titulo' htmlFor={USER.EMAIL}>Email</label>
                    <input id={USER.EMAIL} type='email' className='form-control form-filter input-sm'

                        {...register(USER.EMAIL, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}

                    />
                    <span className='input-error'>{errors.email?.message}</span>
                </div>

                {/* campo password */}

                <div className='campo col-12 col-md-6'>
                    <label className='label-titulo' htmlFor={USER.PASSWORD}>Contraseña</label>
                    <input id={USER.PASSWORD} type='password' className='form-control form-filter input-sm'

                        {...register(USER.PASSWORD, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                            minLength: {
                                value: 8,
                                message: 'La contraseña debe tener al menos 8 caracteres',
                            },
                        })}

                    />
                    <span className='input-error'>{errors.password?.message}</span>
                </div>

                {/* compo password_confirmation */}

                <div className="compo col-12 col-sm-6">

                    <div className={watch(USER.PASSWORD) ? 'col-12' : 'd-none'}>
                        <label className='label-titulo' htmlFor={USER.PASSWORD_CONFIRMATION}>Confirmar contraseña</label>
                        <input id={USER.PASSWORD_CONFIRMATION} type='password' className='form-control form-filter input-sm'

                            {...register(USER.PASSWORD_CONFIRMATION, {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio',
                                },
                                validate: (value) => {
                                    return value === watch(USER.PASSWORD)
                                        ? true
                                        : 'No coincide con la contraseña';
                                },
                            })}

                        />
                        <span className='input-error'>{errors.password_confirmation?.message}</span>
                    </div>
                </div>

                {/* campo rol_id */}

                <div className='campo col-12 col-md-6'>
                    <label className='label-titulo' htmlFor={USER.ROL_ID}>Rol</label>
                    <select id={USER.ROL_ID} name={USER.ROL_ID} className='form-control form-filter' onChange={manejarSelectRol}>
                        <option value=''>Selecciona un tipo de rol</option>
                        {optionsRol()}
                    </select>
                    <input type='hidden'
                        {...register(USER.ROL_ID, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.rol_id?.message}</span>
                </div>

                {/* campo trabajadores */}

                <div className='campo col-12 col-md-6'>
                    <label className='label-titulo' htmlFor={USER.TRABAJADOR}>Trabajador asociado</label>
                    <select id={USER.TRABAJADOR} name={USER.TRABAJADOR} className='form-control form-filter' onChange={manejarSelectTrabajador}>
                        <option value=''>Selecciona un trabajador</option>
                        {optionsTrabajadores()}
                    </select>
                    <input type='hidden'
                        {...register(USER.TRABAJADOR, {
                            required: {
                                value: true,
                                message: 'Este campo es obligatorio',
                            },
                        })}
                    />
                    <span className='input-error'>{errors.rol_id?.message}</span>
                </div>

            </div>

            <div className='row boton'>

                {/* boton crear */}

                <div className='campo col-12'>
                    <button type='submit' className='btn btn-primary'>
                        {'Crear Usuario'}
                    </button>
                </div>

                {/* boton reset */}

                <div className='campo col-12'>
                    <button type='reset' className='btn btn-secondary'>
                        Reset
                    </button>
                </div>

            </div>
            {/* JSON.stringify(watch()) */}
        </form>
    );
}

export default CrearUser;

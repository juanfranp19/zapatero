const AjaxLoader = () => {

    return (
        <div className='d-flex justify-content-center'>
            <div className='spinner-border text-success' role='status'>
                <span className='visually-hidden'>Cargando...</span>
            </div>
        </div>
    );
}

export default AjaxLoader;

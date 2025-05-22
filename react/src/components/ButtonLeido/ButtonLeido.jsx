import { Tooltip } from 'react-tooltip';
import './ButtonLeido.css';

const ButtonLeido = ({ onClick }) => {

    return (
        <button
            className='button-leido'
            data-tooltip-id='button-leido-tooltip'
            data-tooltip-content='Marcar como leído'
            onClick={onClick}
        >
            <i className='bi bi-eye' />
            <Tooltip id='button-leido-tooltip' />
        </button>
    );
}

export default ButtonLeido;

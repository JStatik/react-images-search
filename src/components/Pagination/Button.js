import React from 'react';
import PropTypes from 'prop-types';

const Button = ( { numberButton, currentPage, setCurrentPage } ) => {
    return (
        <li className={ `page-item ${ currentPage === numberButton && 'active' }` }>
            <button
                type="button"
                className="page-link"
                onClick={ () => setCurrentPage( numberButton ) }
            >
                { numberButton }
            </button>
        </li>
    );
};

Button.propTypes = {
    numberButton: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired
};

export default Button;

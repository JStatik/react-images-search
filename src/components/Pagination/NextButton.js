import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ( { totalPages, currentPage, setCurrentPage } ) => {
    return (
        <li className={ `page-item ${ currentPage === totalPages && 'disabled' }` }>
            <button
                type="button"
                className="page-link"
                onClick={ () => setCurrentPage( currentPage + 1 ) }
            >
                <span aria-hidden="true">&raquo;</span>
            </button>
        </li>
    );
};

NextButton.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired
};

export default NextButton;

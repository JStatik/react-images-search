import React from 'react';
import PropTypes from 'prop-types';

const PrevButton = ( { currentPage, setCurrentPage } ) => {
    return (
        <li className={ `page-item ${ currentPage === 1 && 'disabled' }` }>
            <button
                type="button"
                className="page-link"
                onClick={ () => setCurrentPage( currentPage - 1 ) }
            >
                <span aria-hidden="true">&laquo;</span>
            </button>
        </li>
    );
};

PrevButton.propTypes = {
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired
};

export default PrevButton;

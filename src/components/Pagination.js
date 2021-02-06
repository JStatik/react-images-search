import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Pagination/Button';
import NextButton from './Pagination/NextButton';
import PrevButton from './Pagination/PrevButton';

const Pagination = ( { totalPages, currentPage, setCurrentPage } ) => {
    const [ minButtonPagination, ] = useState( () => {
        if( totalPages < 5 || currentPage - 2 < 1 ) {
            return 1;
        } else if( currentPage + 4 > totalPages ) {
            return totalPages - 4;
        } else {
            return currentPage - 2;
        }
    } );

    const [ maxButtonPagination, ] = useState( () => {
        if( totalPages < 5 || currentPage + 4 > totalPages ) {
            return totalPages;
        } else if( currentPage + 2 < 5 ) {
            return 5;
        } else {
            return currentPage + 2;
        }
    } );

    const [ buttonsPagination, setButtonsPagination ] = useState( [] );

    useEffect( () => {
        for( let i = minButtonPagination; i <= maxButtonPagination; i++ ) {
            setButtonsPagination( buttonsPagination => [ ...buttonsPagination, i ] );
        }
    }, [ minButtonPagination, maxButtonPagination ] );

    return (
        <nav className="mt-3">
            <ul className="pagination">
                <PrevButton
                    currentPage={ currentPage }
                    setCurrentPage={ setCurrentPage }
                />

                {
                    buttonsPagination.map( ( button ) => (
                        <Button
                            key={ button }
                            numberButton={ button }
                            currentPage={ currentPage }
                            setCurrentPage={ setCurrentPage }
                        />
                    ) )
                }
                
                <NextButton
                    totalPages={ totalPages }
                    currentPage={ currentPage }
                    setCurrentPage={ setCurrentPage }
                />
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired
};

export default Pagination;

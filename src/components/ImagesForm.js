import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import useForm from '../hooks/useForm';
import isValidImagesForm from '../helpers/isValidImageForm';
import ImagesInput from './ImageForm/ImagesInput';
import SubmitButton from './ImageForm/SubmitButton';

const ImagesForm = ( { setQuery, setCurrentPage } ) => {
    const [ formValues, handleInputChange, reset ] = useForm( { images: '' } );
    const { images } = formValues;

    const [ error, setError ] = useState( null );
    const [ disabled, setDisabled ] = useState( false );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setDisabled( true );

        const escapedImages = validator.escape( images );

        const { errorImages, isValid } = isValidImagesForm( escapedImages );
        setError( errorImages );

        if( isValid ) {
            setQuery( escapedImages );
            setCurrentPage( 1 );
            reset();
        }

        setDisabled( false );
    };

    return (
        <form autoComplete="off" onSubmit={ handleSubmit }>
            <div className="row">
                <ImagesInput
                    images={ images }
                    handleInputChange={ handleInputChange }
                    error={ !error ? '' : error }
                />

                <SubmitButton disabled={ disabled } />
            </div>
        </form>
    );
};

ImagesForm.propTypes = {
    setQuery: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired
};

export default ImagesForm;

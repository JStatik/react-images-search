import React from 'react';
import PropTypes from 'prop-types';

const ImagesInput = ( { images, handleInputChange, error } ) => {
    return (
        <div className="form-group col-md-7 offset-md-1">
            <input
                type="text"
                className={ `form-control ${ error && 'is-invalid' }` }
                placeholder="Buscar imágenes..."
                name="images"
                value={ images }
                onChange={ handleInputChange }
            />
            <div className="invalid-feedback">{ error }</div>
        </div>
    );
};

ImagesInput.propTypes = {
    images: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default ImagesInput;

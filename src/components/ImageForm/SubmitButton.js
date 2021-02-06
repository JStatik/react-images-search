import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = React.memo( ( { disabled } ) => {
    return (
        <div className="form-group col-md-3">
            <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={ disabled }
            >
                Buscar
            </button>
        </div>
    );
} );

SubmitButton.propTypes = {
    disabled: PropTypes.bool.isRequired
};

export default SubmitButton;

import React from 'react';
import PropTypes from 'prop-types';

const Error = ( { error } ) => {
    return (
        <div className="container-error">
            <p>
                { error }
            </p>
        </div>
    );
};

Error.propTypes = {
    error: PropTypes.string.isRequired
};

export default Error;

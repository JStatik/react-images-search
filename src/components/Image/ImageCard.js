import React from 'react';
import PropTypes from 'prop-types';

const ImageCard = ( { image, name } ) => {
    return (
        <img
            src={ image }
            alt={ name }
            className="card-img-top"
            height="150"
        />
    );
};

ImageCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ImageCard;

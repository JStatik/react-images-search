import React from 'react';
import PropTypes from 'prop-types';

const FooterCard = ( { image } ) => {
    return (
        <div className="card-footer text-center">
            <a
                href={ image }
                target="_blank"
                rel="noreferrer"
            >
                Ver imagen
            </a>
        </div>
    );
};

FooterCard.propTypes = {
    image: PropTypes.string.isRequired
};

export default FooterCard;

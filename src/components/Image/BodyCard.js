import React from 'react';
import PropTypes from 'prop-types';

const BodyCard = ( { likes, views } ) => {
    return (
        <div className="row card-body">
            <div className="col-6 text-center p-0 border-right-card">
                <span><i className="fas fa-thumbs-up"></i> { likes }</span>
            </div>

            <div className="col-6 text-center p-0">
                <span><i className="fas fa-eye"></i> { views }</span>
            </div>
        </div>
    );
};

BodyCard.propTypes = {
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired
};

export default BodyCard;

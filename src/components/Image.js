import React from 'react';
import PropTypes from 'prop-types';
import BodyCard from './Image/BodyCard';
import FooterCard from './Image/FooterCard';
import ImageCard from './Image/ImageCard';

const Image = ( { image } ) => {
    const { largeImageURL, likes, tags, views } = image;

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 p-3">
            <div className="card">
                <ImageCard
                    image={ largeImageURL }
                    name={ tags }
                />

                <BodyCard
                    likes={ likes }
                    views={ views }
                />

                <FooterCard
                    image={ largeImageURL }
                />
            </div>
        </div>
    );
};

Image.propTypes = {
    image: PropTypes.object.isRequired
};

export default Image;

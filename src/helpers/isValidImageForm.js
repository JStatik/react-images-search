import validator from 'validator';

const isValidImagesForm = ( images ) => {
    if( images.trim().length < 2 || validator.isEmpty( images ) || !validator.isAlpha( images, [ 'es-ES' ], { ignore: ' ' } ) ) {
        return {
            errorImages: 'Ingrese una imagen válida para su búsqueda.',
            isValid: false
        };
    }

    return {
        errorImages: null,
        isValid: true
    };
};

export default isValidImagesForm;

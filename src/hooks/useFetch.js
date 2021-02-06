import { useEffect, useRef, useState } from 'react';

const useFetch = ( containerMain, query, currentPage ) => {
    const isMountedRef = useRef( true );
    const [ state, setState ] = useState( { data: [], totalPages: 1, loading: true, error: null } );

    useEffect( () => {
        return () => {
            isMountedRef.current = false;
        }
    }, [] )

    useEffect( () => {
        setState( { data: [], totalPages: 1, loading: true, error: null } );

        const getImages = async() => {
            try {
                const limitResults = 12;
                const url = `https://pixabay.com/api/?key=12407256-74c23a8e7869156a9f8ac0334&q=${ encodeURI( query ) }&per_page=${ limitResults }&page=${ currentPage }`;

                const request = await fetch( url );
                const response = await request.json();

                if( response.hits.length > 0 ) {
                    isMountedRef.current
                        &&
                    setState( {
                        data: response.hits,
                        totalPages: Math.ceil( response.totalHits / limitResults ),
                        loading: false,
                        error: null
                    } );
                } else {
                    isMountedRef.current
                        &&
                    setState( {
                        data: [],
                        totalPages: 1,
                        loading: false,
                        error: 'No se encontraron resultados, intente nuevamente.'
                    } );
                }

                containerMain.scrollIntoView( { behavior: 'smooth' } );
            } catch ( err ) {
                setState( { data: [], totalPages: 1, loading: false, error: err } );
            }
        };

        getImages();
    }, [ containerMain, query, currentPage ] );

    return state;
};

export default useFetch;

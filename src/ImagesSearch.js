import React, { useRef, useState } from 'react';
import useFetch from './hooks/useFetch';
import Error from './components/Error';
import Image from './components/Image';
import ImagesForm from './components/ImagesForm';
import Loading from './components/Loading';
import Pagination from './components/Pagination';
import TitleApp from './components/TitleApp';

const ImagesSearch = () => {
    const containerMain = useRef();
    const [ query, setQuery ] = useState( 'Colombia' );
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const { data: images, totalPages, loading, error } = useFetch( containerMain.current, query, currentPage );

    return (
        <div className="container">
            <div className="mt-3 p-3 bg-secondary shadow" ref={ containerMain }>
                <TitleApp />

                <ImagesForm
                    setQuery={ setQuery }
                    setCurrentPage={ setCurrentPage }
                />
            </div>

            {
                loading
                    ?
                        <Loading />
                    :
                        error
                            ?
                                <Error error="No se encontraron resultados, intente nuevamente." />
                            :
                                <>
                                    <div className="row justify-content-center">
                                        {
                                            images.map( image => (
                                                <Image
                                                    key={ image.id }
                                                    image={ image }
                                                />
                                            ) )
                                        }
                                    </div>

                                    <div className="row justify-content-center">
                                        <Pagination
                                            totalPages={ totalPages }
                                            currentPage={ currentPage }
                                            setCurrentPage={ setCurrentPage }
                                        />
                                    </div>
                                </>
            }
        </div>
    );
};

export default ImagesSearch;

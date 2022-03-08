import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import AppBanner from '../appBanner/AppBanner';

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {loading, error, getCharacters, getComic, clearError} =  useMarvelService();

    useEffect(() => {
        updateData();
    }, [id])

    const updateData = () =>{
        clearError();

        switch (dataType){
            case 'comic':
                    getComic(id).then(onCharLoaded);
                    break;
            case 'character':
                    getCharacters(id).then(onCharLoaded);
        }
    }

    const onCharLoaded = (data) => {
        setData(data);
    }

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading || error || !data) ? <Component data={data}/> : null;

    return (
        <>
            <AppBanner/>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

export default SinglePage;
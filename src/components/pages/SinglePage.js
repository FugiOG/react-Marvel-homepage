import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';
import setContent from '../../utils/setContent';

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const { getCharacters, getComic, clearError, process, setProcess} =  useMarvelService();

    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, [id])

    const updateData = () =>{
        clearError();

        switch (dataType){
            case 'comic':
                    getComic(id).then(onCharLoaded).then(() => setProcess('confirmed'));
                    break;
            case 'character':
                    getCharacters(id).then(onCharLoaded).then(() => setProcess('confirmed'));
                    break;
        }
        
    }

    const onCharLoaded = (data) => {
        setData(data);
    }

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
        </>
    )
}

export default SinglePage;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import './comicsList.scss';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';

const setContent = (process, Component, newItemLoading) => {
    switch (process){
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMessage/>;
        default: 
            throw new Error('Unexpected process state');
    }
}

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);
    const [limit, setLimit] = useState(8);
    const { getAllComics, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateComics(offset, limit, true);
        // eslint-disable-next-line
    }, []);

    const onComicsLoaded = (newComicsList) => {
        let ended = newComicsList.length < 8;

        setComics(comicsList => [...comicsList, ...newComicsList])
        setNewItemLoading(item => false);
        setOffset(offset => offset + limit);
        setComicsEnded(comicsEnded => ended);
    }

    const updateComics = (offset, limit, initial) => {
        clearError();
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset, limit)
            .then(onComicsLoaded)
            .then(() => setProcess('confirmed'));
    }

    function renderItems (arr){
        const elements = arr.map((item, i) => {
            const {id, title, price, thumbnail} = item;

            return (
                <li key={i} tabIndex={0} className="comics__item">
                    <Link to={`/react-Marvel-homepage/comics/${id}`}>
                        <img src={thumbnail} alt={title} className="comics__item-img"/>
                        <div className="comics__item-name">{title}</div>
                        <div className="comics__item-price">{price}</div>
                    </Link>
                </li>
            )
        })

        return (
            <ul className="comics__grid">
                {elements}
            </ul>
        )
    }

    return (
        <div className="comics__list">
            {setContent(process, () => renderItems(comics), newItemLoading)}
               
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => updateComics(offset, limit)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;
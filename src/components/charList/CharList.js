import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './charList.scss';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';

const CharList = (props) => {

    const [characters, setCharacters] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
    const [limit, setLimit] = useState(9);

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, limit, true);
    }, [])

    const onRequest = (offset, limit, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset, limit)
            .then(onCharListLoaded);
    }

    const onCharListLoaded = (newCharacters) => {
        let ended = false;

        if (newCharacters.length < 9){
            ended = true;
        }

        setCharacters(characters => [...characters, ...newCharacters]);
        setNewItemLoading(item => false);
        setOffset(offset => offset + limit);
        setCharEnded(charEnded => ended);
    }

    const itemRefs = useRef([]);


    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems (arr) {
        const elements = arr.map((item, index)=> {
            const {name, thumbnail, id} = item;

            let imgStyle = null;
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
                imgStyle = {objectFit: "contain"};
            }

            return (
                <li ref={el => itemRefs.current[index] = el} 
                    className="char__item" 
                    key={id} 
                    onClick={() => {
                        props.onCharSelected(id)
                        focusOnItem(index)
                    }}
                    tabIndex={0}>

                    <img src={thumbnail} alt={name} style={imgStyle}/>
                    <div className="char__name">{name}</div>
                </li>
            )
        })

        return( 
            <ul className="char__grid">
                {elements}
            </ul>
        )
    }

    const elements = renderItems(characters);
    
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {elements}
            <button 
                className="button button__main button__long"
                onClick={() => onRequest(offset, limit)}
                disabled={newItemLoading}
                style={{display: charEnded ? "none" : "block"}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;
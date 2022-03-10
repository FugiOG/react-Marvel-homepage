import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './charList.scss';
import useMarvelService from '../../services/MarvelService';
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

const CharList = (props) => {

    const [characters, setCharacters] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
    const [limit, setLimit] = useState(9);

    const {getAllCharacters, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, limit, true);
        // eslint-disable-next-line
    }, [])

    const onRequest = (offset, limit, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset, limit)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'));
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
            const duration = 500;

            let imgStyle = null;
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
                imgStyle = {objectFit: "contain"};
            }

            return (
                <CSSTransition 
                key={id}
                timeout={duration} 
                classNames="char__item">
                    <li ref={el => itemRefs.current[index] = el} 
                        className="char__item"  
                        onClick={() => {
                            props.onCharSelected(id)
                            focusOnItem(index)
                        }}
                        onKeyPress={(e) => {
                            if (e.key === ' ' || e.key === 'Enter'){
                                props.onCharSelected(id)
                                focusOnItem(index)
                            }

                        }}
                        tabIndex={0}>
                            <img src={thumbnail} alt={name} style={imgStyle}/>
                            <div className="char__name">{name}</div>
                    </li>
                </CSSTransition>
                
            )
        })

        return( 
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {elements}
                </TransitionGroup>
            </ul>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(characters), newItemLoading)
        // eslint-disable-next-line
    }, [process])

    return (
        <div className="char__list">
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
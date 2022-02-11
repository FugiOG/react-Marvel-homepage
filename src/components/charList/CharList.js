import { Component } from 'react';
import './charList.scss';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';

class CharList extends Component{
    state = {
        characters: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false,
        limit: 9,
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset, limit) => {
        this.onCharListLoading();
        this.marvelService
            .getAllCharacters(offset, limit)
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharListLoaded = (newCharacters) => {
        let ended = false;

        if (newCharacters.length < 9){
            ended = true;
        }

        this.setState(({characters, offset, limit}) => ({
            characters: [...characters, ...newCharacters],
            loading: false,
            newItemLoading: false,
            offset: offset + limit,
            charEnded: ended,
        }))

    }

    renderItems (arr) {
        const elements = arr.map(item => {
            const {name, thumbnail, id} = item;

            let imgStyle = null;
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
                imgStyle = {objectFit: "contain"};
            }

            return (
                <li className="char__item" key={id} onClick={() => this.props.onCharSelected(id)}>
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

    render() {
        const {characters, error, loading, newItemLoading, offset, charEnded, limit} = this.state;

        const elements = this.renderItems(characters);
        
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = error || loading ? null : elements;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button 
                    className="button button__main button__long"
                    onClick={() => this.onRequest(offset, limit)}
                    disabled={newItemLoading}
                    style={{display: charEnded ? "none" : "block"}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;
import { Helmet } from 'react-helmet';

import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({data}) => {
    const {thumbnail, name, fullDescription} = data;
    
    return (
        <div className="single-char">
            <Helmet>
                <meta
                    name="description"
                    content={`${name} character`}
                    />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-char__img"/>
            <div className="single-char__info">
                <h2 className="single-char__name">{name}</h2>
                <p className="single-char__descr">{fullDescription}</p>
            </div>
        </div>
    )
}


export default SingleCharacterLayout;
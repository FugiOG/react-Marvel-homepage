import {useHttp} from '../hooks/http.hook';

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=c65c6c4f74077c85f47223756e7b0505';
    const _baseOffset = 210;
    const _baseLimit = 9;
    const _comicsLimit = 8;
    const _comicsOffset = 100;

    const getAllComics = async (offset = _comicsOffset, limit = _comicsLimit) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=${limit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getAllCharacters = async (offset = _baseOffset, limit = _baseLimit) => {
        const res = await request(`${_apiBase}characters?limit=${limit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacters = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'description is missing',
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.comics.items
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description,
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
            thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            language: comics.textObjects.language || 'en-us'
        }
    }

    return {loading, error, getAllCharacters, getCharacters, clearError, getAllComics}
}

export default useMarvelService;
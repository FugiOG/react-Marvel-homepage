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

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const getAllCharacters = async (offset = _baseOffset, limit = _baseLimit) => {
        const res = await request(`${_apiBase}characters?limit=${limit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacters = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`)
        return res.data.results.map(_transformCharacter);
    }

    const _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'description is missing',
            fullDescription: char.description || 'description is missing',
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.comics.items,
            comicsId: char.comics.items.map(item => item.resourceURI.slice(-5))
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description,
            price: comics.prices.price ? `${comics.prices.price}$` : 'not available',
            thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            language: comics.textObjects.language || 'en-us'
        }
    }

    return {loading, error, getAllCharacters, getCharacters, clearError, getAllComics, getComic, getCharacterByName}
}

export default useMarvelService;
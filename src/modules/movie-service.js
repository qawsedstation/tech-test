export default class MovieService {

    API = `api_key=535ed1e47e2d81d0868580056fdad719`;
    BASE_URL = 'https://api.themoviedb.org/3';
    SEARCH_MOVIE_URL = `${this.BASE_URL}/search/movie?${this.API}&page=1`;
    TOP_RATED_MOVIES_URL = `${this.BASE_URL}/movie/top_rated?${this.API}&page=1`;
    UPCOMING_MOVIES_URL = `${this.BASE_URL}/movie/upcoming?${this.API}&page=1`;
    TYPE_UPCOMING = 'upcoming'

    /**
     * Return a promise with the movie list
     * @param {*} searchInput 
     */
    getMovies(searchInput) {
        const searchInputValue = searchInput;
        const url = this.constructUrl(searchInputValue);

        return fetch(url).then((response) => response.json());
    }

    /**
     * This method constructs the url for the http requests
     */
    constructUrl = searchInputValue => {
        let url;
        if (searchInputValue === this.TYPE_UPCOMING) {
            url = `${this.UPCOMING_MOVIES_URL}`
        }else if (searchInputValue) {
            url = `${this.SEARCH_MOVIE_URL}&query=${searchInputValue}`
        } else {
            url = this.TOP_RATED_MOVIES_URL
        }

        return url;
    }

}
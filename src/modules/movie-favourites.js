export default class MovieFavourites {

    static isMovieInFavourites(movieId) {
        if (localStorage.getItem('favourite-movies')) {
            const favourite_movies = JSON.parse(localStorage.getItem('favourite-movies'));
            return favourite_movies[movieId];
        } else {
            return false;
        }
    }

    static getFavourites() {
        let favourite_movies = localStorage.getItem('favourite-movies') ? JSON.parse(localStorage.getItem('favourite-movies')) : {}
        return Object.values(favourite_movies)
    }

    static addMovieToFavourites(movie) {
        let favourite_movies = localStorage.getItem('favourite-movies') ? JSON.parse(localStorage.getItem('favourite-movies')) : {}
        favourite_movies[movie.id] = movie;
        localStorage.setItem('favourite-movies', JSON.stringify(favourite_movies));
    }

    static removeMoviefromFavourites(movieId) {
        let favourite_movies = localStorage.getItem('favourite-movies') ? JSON.parse(localStorage.getItem('favourite-movies')) : {}
        delete favourite_movies[movieId];
        localStorage.setItem('favourite-movies', JSON.stringify(favourite_movies));
    }





}
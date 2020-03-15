import MovieService from './modules/movie-service.js';
import SortMovies from './modules/sort-movies.js';
import MovieFavourites from './modules/movie-favourites.js'
import ViewModel from './modules/view-model.js'

class App {

  TYPE_UPCOMING = 'upcoming'
  TYPE_ALL_MOVIES = 'all-movies'
  TYPE_VOTE_AVERAGE = 'vote_average'
  TYPE_VOTE_COUNT = 'vote_count'

  FILTER_BY_FAVOURITE = 'favourite'

  constructor(movieService) {
    this.movieService = movieService;
    this.movies = [];
    this.favourite_movies = {}
    this.filterBy = ''
  }

  boostrap() {
    ViewModel.onFilterOptionChanged((filterBy) => {
      this.filterBy = filterBy;
      switch (this.filterBy) {
        case this.FILTER_BY_FAVOURITE:
          this.movies = MovieFavourites.getFavourites(this.movies);
          ViewModel.renderMovieList(this.movies)
          break;
        case this.TYPE_UPCOMING:
          this.getMovies(this.TYPE_UPCOMING);
          ViewModel.renderMovieList(this.movies)
          break;
        default:
          this.getMovies('');
          ViewModel.renderMovieList(this.movies)

      }
    })

    ViewModel.onClickSortByVote(() => {
      this.movies = SortMovies.sort(this.movies, this.TYPE_VOTE_COUNT);
      ViewModel.renderMovieList(this.movies)
    })

    ViewModel.onClickFavouriteIcon((movieId, image) => {
      const movie = this.movies.filter((movie)=> parseInt(movie.id) === parseInt(movieId))[0];
  
      if (MovieFavourites.isMovieInFavourites(movieId)) {
        MovieFavourites.removeMoviefromFavourites(movieId);
        image.src = './assets/img/not_fav.svg'
      } else {
        MovieFavourites.addMovieToFavourites(movie);
        image.src = './assets/img/fav.svg';
      }

      if(this.filterBy === this.FILTER_BY_FAVOURITE){
        this.movies = MovieFavourites.getFavourites(this.movies);
      }
   
      ViewModel.renderMovieList(this.movies);
    })


    ViewModel.onInputPressEnter((movieName) => {
      this.getMovies(movieName)
    })

    ViewModel.onClickSearchIcon((movieName) => {
      this.getMovies(movieName)
    })


    this.getMovies();
  }

  
  getMovies(searchInput) {
    this.movieService.getMovies(searchInput)
      .then(data => {
        this.movies = data.results;
        this.movies = SortMovies.sort(this.movies, this.TYPE_VOTE_AVERAGE);
        ViewModel.renderMovieList(this.movies)
      })
  }
}

/**
 * I inject the service here to ilustrate that I understand the principle of Inversion of control
 */
const app = new App(new MovieService())

app.boostrap();


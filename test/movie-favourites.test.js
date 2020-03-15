
import MovieFavourites from '../src/modules/movie-favourites.js'


describe('Movie Favourites Module', () => {

  const movies = [
    {
      "id": 1,
      "title": "Titanic",
      "description": "This movie was released in 1877 and it was amazing",
      "score": 6
    },
    {
      "id": 2,
      "title": "JFK",
      "description": "This movie was released in 1877 and it was amazing",
      "score": 1
    }];

  afterEach(() =>{
    localStorage.clear();
  })
 
  test('it should return false back if a movie is not in the favourite list', () => {
    expect(MovieFavourites.isMovieInFavourites(1)).toBe(false)
  })

  test('it should return true back if a movie is in the favourite list', () => {

    localStorage.setItem('favourite-movies', JSON.stringify({1: movies[0]}));
    expect(MovieFavourites.isMovieInFavourites(1)).toStrictEqual(movies[0])
  })

  test('it should return all the favourite movies', () => {

    localStorage.setItem('favourite-movies', JSON.stringify([{1: movies[0]},{2: movies[1]}]));
    expect(MovieFavourites.getFavourites()[0][1]).toStrictEqual(movies[0])

  })

  test('it should not return any favourite movies', () => {
    expect(MovieFavourites.getFavourites(movies.slice())).toStrictEqual([])
  })


  test('it should save the new movie to the localstorage', () => {
    MovieFavourites.addMovieToFavourites(movies[0]);
    expect(JSON.parse(localStorage.getItem('favourite-movies'))[1]).toStrictEqual(movies[0])
  })

  test('it should remove the movie from the localstorage', () => {

    localStorage.setItem('favourite-movies', JSON.stringify({1: true}));
    MovieFavourites.removeMoviefromFavourites(1);
    expect(JSON.parse(localStorage.getItem('favourite-movies'))).toStrictEqual({})
  })
 

});
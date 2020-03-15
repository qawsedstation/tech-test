import MovieService from '../src/modules/movie-service.js'


describe('Movie Service', () => {

  const movieService = new MovieService();
  const API_KEY = 'api_key=535ed1e47e2d81d0868580056fdad719';
 
  test('it should return the correct url when constructUrl is called with an empty parameter', () => {
    const EXPECTED_URL = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&page=1`;

    expect(movieService.constructUrl('')).toBe(EXPECTED_URL)
  })

  test('should return the correct url when constructUrl is called with a search term value', () => {
    const searchText = 'Terminator';
    const EXPECTED_URL = `https://api.themoviedb.org/3/search/movie?${API_KEY}&page=1&query=${searchText}`;

    expect(movieService.constructUrl(searchText)).toBe(EXPECTED_URL);
  })

  test('should return the correct url when constructUrl is called with a search term value', () => {
    const searchText = 'Terminator';

    const results = [
      {
        "id": 1,
        "title": "Titanic",
        "description": "This movie was released in 1877 and it was amazing",
        "score": 3
      },
      {
        "id": 2,
        "title": "JFK",
        "description": "This movie was released in 1877 and it was amazing",
        "score": 4
      }];

    fetch.mockResponseOnce(JSON.stringify(results));
    const onResponse = jest.fn();
    const onError = jest.fn();
  
    return  movieService.getMovies(searchText)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
  
        expect(onResponse.mock.calls[0][0]).toEqual(results);
      });
  })
});
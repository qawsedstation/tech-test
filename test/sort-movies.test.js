import SortMovies from '../src/modules/sort-movies.js'


describe('Sort Movies Module', () => {
 
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

  test('it should return the movies sorted by id', () => {
    expect(SortMovies.sort(movies.slice(),'id')[0]).toEqual(movies[1])
  })

  test('it should return the movies sorted by score', () => {
    expect(SortMovies.sort(movies.slice(),'score')[0]).toBe(movies[0])
  })

});


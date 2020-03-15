export default class SortMovies {
    
    static sort(movies,sortBy) {
        return movies.sort((a, b) => b[sortBy] - a[sortBy]);
    }
}
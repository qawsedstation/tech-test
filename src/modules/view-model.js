import MovieFavourites from './movie-favourites.js'

export default class ViewModel {

    static onClickSortByVote(cb) {
        document.getElementById("sort-by-vote-control").addEventListener('click', cb);
    }

    static onFilterOptionChanged(cb) {
        document.getElementById("filter-control").addEventListener('change', event => {
            cb(event.target.value);
        });
    }


    static onClickFavouriteIcon(cb) {
        document.getElementById("results").addEventListener('click', event => {
            if (event.target && event.target.nodeName === 'IMG') {
                const movieId = event.target.dataset.id;
                cb(movieId,event.target);
            }
        });
    }


    static onInputPressEnter(cb) {
        document.getElementById("search-input").addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
              event.preventDefault();
              cb(event.target.value);
            }
        });
    }


    static onClickSearchIcon(cb) {
        document.getElementById("search-icon").addEventListener("click", (event) => {
              cb(document.getElementById("search-input").value);
        });
    }


    static renderMovieList(movies) {

        document.getElementById("movies-meta").innerHTML = `<h4> Showing ${movies.length} movies of ${movies.length}</h4>`;
        document.getElementById("results").innerHTML = movies.map(movie => {
          return `
          <li>
            <img src=${ movie.poster_path ? 'http://image.tmdb.org/t/p/w92//' + movie.poster_path : 'http://goo.gl/ijai22'} />
            <div class="card-one">
              <h3>
                ${movie.title} 
                <span>(${movie.release_date})</span>
              </h3>
              <span class="description">${movie.overview}</span>
            </div>
            <div class="card-two">
              <img data-id="${movie.id}" src="./assets/img/${MovieFavourites.isMovieInFavourites(movie.id) ? 'fav' : 'not_fav'}.svg" />
              <button>More info</<button>
            </div>
          </li>`
        });
    }



  
  

    


    



    

}
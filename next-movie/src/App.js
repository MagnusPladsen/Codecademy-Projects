import React from 'react';
import { getSelectedGenre, clearCurrentMovie, populateGenreDropdown, getRandomMovie, displayMovie } from './helpers/helpers';


const tmdbKey = '?api_key=7a0622079eb690b7d401c60fcb58a720';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/';


/* const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = tmdbKey;
  const urlToFetch = tmdbBaseUrl+genreRequestEndpoint+requestParams;
  try {
     const response = await fetch(urlToFetch, {cache: 'no-cache'});
     if (response.ok) {
       const jsonResponse = await response.json();
       const genres = jsonResponse.genres;
       return genres;
     }
     throw new Error('Request failed!');
   } catch (error) {
     console.log(error);
   }
}; */

/* const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = tmdbKey+'with_genres='+selectedGenre;
  const urlToFetch = tmdbBaseUrl+discoverMovieEndpoint+requestParams;
  try {
    const response = await fetch(urlToFetch, {cache: 'no-cache'});
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      return movies;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}; */

/* const getMovieInfo = async (movie) => { //usikker på om riktig syntax
  const movieId = movie.id;
  const movieEndpoint = '/movie/'+movieId;
  const requestParams = tmdbKey;
  const urlToFetch = tmdbBaseUrl+movieEndpoint+requestParams;
  try {
    const response = await fetch(urlToFetch, {cache: 'no-cache'});
    if (response.ok) {
      const jsonResponse = await response.json();
      const movieInfo = jsonResponse;
      return movieInfo;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};
 */
// Gets a list of movies and ultimately displays the info of a random movie from the list
/* const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = getMovieInfo(randomMovie);
  displayMovie(info);
}; */


//playBtn.onclick = showRandomMovie;   DENNE MÅ FIKSES!!!

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getGenres = this.getGenres.bind(this);

  }
  handleOnClick() {

  };
  getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = tmdbKey;
  const urlToFetch = tmdbBaseUrl+genreRequestEndpoint+requestParams;
  try {
     const response = await fetch(urlToFetch, {cache: 'no-cache'});
     if (response.ok) {
       const jsonResponse = await response.json();
       const genres = jsonResponse.genres;
       populateGenreDropdown(genres);
       return genres;
     }
     throw new Error('Request failed!');
   } catch (error) {
     console.log(error);
   }
  //populateGenreDropdown(genres);
};
  getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const discoverMovieEndpoint = '/discover/movie';
    const requestParams = tmdbKey+'with_genres='+selectedGenre;
    const urlToFetch = tmdbBaseUrl+discoverMovieEndpoint+requestParams;
    try {
      const response = await fetch(urlToFetch, {cache: 'no-cache'});
      if (response.ok) {
        const jsonResponse = await response.json();
        const movies = jsonResponse.results;
        return movies;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  };
  getMovieInfo = async (movie) => { //usikker på om riktig syntax
    const movieId = movie.id;
    const movieEndpoint = '/movie/'+movieId;
    const requestParams = tmdbKey;
    const urlToFetch = tmdbBaseUrl+movieEndpoint+requestParams;
    try {
      const response = await fetch(urlToFetch, {cache: 'no-cache'});
      if (response.ok) {
        const jsonResponse = await response.json();
        const movieInfo = jsonResponse;
        return movieInfo;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  };
  showRandomMovie = async () => {
    const movieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0) {
      clearCurrentMovie();
    };
    const movies = await this.getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = this.getMovieInfo(randomMovie);
    displayMovie(info);
  };
  render () {
    return (
      <div className="App">
        <header>
          <h1 id="appTitle">🍿Next movie🍿</h1>
        </header>
        <form id="genreForm">
          <label>Choose a genre:</label>
          <select name="genres" id="genres">
          </select>
        </form>
        <button id="playBtn" onClick={this.showRandomMovie()}>Let's Play!</button>
        <div id="movieInfo">
          <div id="moviePoster"></div>
          <div id="movieText"></div>
        </div>
        <div id="likeOrDislikeBtns" hidden>
          <button id="likeBtn"><i className="fa-solid fa-thumbs-up"></i></button>
          <button id="dislikeBtn"><i className="fa-solid fa-thumbs-down"></i></button>
        </div>
      </div>
    );
  }
}


export default App;
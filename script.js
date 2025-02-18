/* 
🌟 APP: Make Netflix

Here we have the Netflix app but it's up to you to make it work by pulling all the movies using an API!

Create a fetchMovies() function that will make a dynamic API call to what you need 👇
========================================

- fetchMovies()

** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)



These are the 3 main functions and their URL'S you must create  👇
========================================

- getOriginals()
  * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'


** These functions will provide the URL you need to fetch() movies of that genere **

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/

// Call the main functions the page is loaded
window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
}

// ** Helper function that makes dynamic API calls **
function fetchMovies(url, dom_element, path_type) {
    // Use Fetch with the url passed down 
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Something went wrong!');
            }
        })
        .then(data => {
            showMovies(data, dom_element, path_type)
        })
        .catch(error => {
            console.log(error);
        })
    // Within Fetch get the response and call showMovies() with the data , dom_element, and path type
}

//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {

    // Create a variable that grabs id or class
    let movies_ele = document.querySelector(dom_element);

    // Loop through object
    for (let movie of movies.results) {
        
        // Within loop create an img element
        let img_ele = document.createElement('img');

        // Set attribute
        img_ele.setAttribute('data_id', movie.id);

        // Set source
        img_ele.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`

        // Append the imageElement to the dom_element selected
        movies_ele.appendChild(img_ele);
    }
}

// ** Function that fetches Netflix Originals **
function getOriginals() {
    let URL = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213';

    fetchMovies(URL, '.original__movies', 'poster_path')

}
// ** Function that fetches Trending Movies **
function getTrendingNow() {
    let URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';

    fetchMovies(URL, '#trending', 'backdrop_path')
}

// ** Function that fetches Top Rated Movies **
function getTopRated() {
    let URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';

    fetchMovies(URL, '#top_rated', 'backdrop_path');
}

// ** BONUS **

// ** Fetches URL provided and returns response.json()
// async function getMovieTrailer(id) {
//     //URL: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`

// }

// // ** Function that adds movie data to the DOM
// const setTrailer = trailers => {
//     // Set up iframe variable to hold id of the movieTrailer Element
//     const iframe = 1
//     // Set up variable to select .movieNotFound element
//     const movieNotFound = 1

//     // If there is a trailer add the src for it
//     if (trailers.length > 0) {
//         // add d-none class to movieNotFound and remove it from iframe

//         // add youtube link with trailers key to iframe.src
//     } else {
//         // Else remove d-none class to movieNotfound and ADD it to iframe

//     }
// }





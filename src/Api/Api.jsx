// import React from 'react'
import axios from 'axios'

const KEY = '60b5bf446116d1216ef8df748d38dc14';
const axiosMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

// popular
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

export async function getTrending() {
    const response = await axiosMovie.get(`/trending/all/day?api_key=${KEY}`);
    return response.data.results;
  }

// search movies
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false 

export async function getMovies(query, page = 1) {
    const response = await axiosMovie.get(`search/movie?api_key=${KEY}&language=en-US&page=${page}&query=${query}&include_adult=false`);
    return response.data
}


// movie details
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US 

export async function getMovie(movie_id) {
    const response = await axiosMovie.get(`movie/${movie_id}?api_key=${KEY}&language=en-US`);
    return response
}

// credits
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export async function getMovieCredits(movie_id) {
    const response = await axiosMovie.get(`movie/${movie_id}/credits?api_key=${KEY}&language=en-US`);
    return response.data.cast
}

// reviews
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export async function getMovieReview(movie_id, page = 1) {
    const response = await axiosMovie.get(`movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=${page}`);
    return response.data.results
}


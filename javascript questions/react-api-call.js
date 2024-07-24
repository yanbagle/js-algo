import React from 'react';
import { useEffect, useState } from 'react';

export function App() {
  const [query, setQuery] = React.useState('');
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
      
    const fetchMovies = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=8fc6c84a&s=${query}`);
      const json = await res.json();  
      const {Search} = json;
      if (Search && Search.length) {
        setMovies(Search);
      }
      console.log(movies);
    }  
    
    if (query.length > 3) {
      fetchMovies().catch(() => {
        console.log('error');
      });
    }
  }, [query])

  //console.log(movies);

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)}></input>
      {movies.map((movie, key) => {
        return (
          <MovieCard key={key} movieInfo={movie}>
            {movie.Title}
          </MovieCard>
        )
      })}
    </div>
  )
}

export function MovieCard(Props) {
  const { movieInfo } = Props
  console.log(Props)

  return (
    <div
      onClick={() => {
        console.log('click')
      }}
    >
      {movieInfo.Title}
    </div>
  )
}

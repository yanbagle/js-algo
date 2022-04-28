import { useEffect, useState } from 'react'

export function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    //console.log(query)
    if (query.length > 3) {
      fetch('https://www.omdbapi.com/?apikey=8fc6c84a&s=' + query, {
        method: 'GET',
      })
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          //console.log(res)
          if (res && res.Search && res.Search.length) {
            setMovies(res.Search)
          }
        })
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

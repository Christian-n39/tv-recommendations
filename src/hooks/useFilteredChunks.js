import React, { useState } from 'react'

function useFilteredChunks(genre) {
  const [filteredChunk, setFilteredChunk] = useState([])
  const [shows, setShows] = useState([])

  const fetchChunk = (from, limit) => {
    if(shows.length) {
      const filteredShowsByGenre = shows.filter(show => show.genres.includes(genre))
      const chunk = filteredShowsByGenre.slice(from, limit)
      setFilteredChunk(chunk)
    } else {
      fetch('http://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const filteredShowsByGenre = data.filter(show => show.genres.includes(genre))
        const chunk = filteredShowsByGenre.slice(from, limit)
        setShows(data)
        setFilteredChunk(chunk)
      })
      .catch(err => console.log(err.message))
    }
    }
  const genresOfAllShows = shows.map(show => show.genres).flat() // map => [ ['a', 'b'], ['b', 'c'], [] ]; flat => ['a', 'b', 'c', ...]
  let genres = []
  genresOfAllShows.forEach(genre => {
    if(!genres.includes(genre)) genres.push(genre)
  })
  return { filteredChunk, fetchChunk, genres }
}

export default useFilteredChunks

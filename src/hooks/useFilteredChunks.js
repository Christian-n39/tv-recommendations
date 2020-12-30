import React, { useState } from 'react'

function useFilteredChunks(genre) {
  const [filteredChunk, setFilteredChunk] = useState([])

  const fetchChunk = (from, limit) => {
    fetch('http://api.tvmaze.com/shows')
    .then(res => res.json())
    .then(data => {
      const filteredShowsByGenre = data.filter(show => show.genres.includes(genre))
      const chunk = filteredShowsByGenre.slice(from, limit)
      setFilteredChunk(chunk)
    })
    .catch(err => console.log(err.message))
  }
  return { filteredChunk, fetchChunk }
}

export default useFilteredChunks

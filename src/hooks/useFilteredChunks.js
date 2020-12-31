import { useState } from 'react'

function useFilteredChunks(genre) {
  const [filteredChunk, setFilteredChunk] = useState([])
  const [shows, setShows] = useState([])

  // fetch data, randomize its order and slice it
  const fetchChunk = (from, limit) => {
    if(shows.length) {
      const filteredShowsByGenre = shows.filter(show => show.genres.includes(genre))
      const chunk = filteredShowsByGenre.slice(from, limit)
      setFilteredChunk(chunk)
    } else {
      fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => {
        data = randomize(data)
        const filteredShowsByGenre = data.filter(show => show.genres.includes(genre))
        const chunk = filteredShowsByGenre.slice(from, limit)
        setShows(data)
        setFilteredChunk(chunk)
      })
      .catch(err => console.log(err.message))
    }
  }

  // get genres from shows
  const genresOfAllShows = shows.map(show => show.genres).flat() // map => [ ['a', 'b'], ['b', 'c'], [] ]; flat => ['a', 'b', 'c', ...]
  let genres = []
  genresOfAllShows.forEach(genre => {
    if(!genres.includes(genre)) genres.push(genre)
  })

  // return the chunk, the function to get a bigger chunk, all the genres and data
  return { filteredChunk, fetchChunk, genres, shows }
}

function randomize(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default useFilteredChunks

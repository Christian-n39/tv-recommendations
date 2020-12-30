import React, { useEffect, useState } from 'react'
import useFilteredChinks from '../hooks/useFilteredChunks'

import SearchInput from '../components/SearchInput'
import GenresNav from '../components/GenresNav'
import ShowsGrid from '../containers/ShowsGrid'
import '../styles/pages/home.css'

function Home() {
  const [genre, setGenre] = useState('Comedy')
  const { filteredChunk, fetchChunk, genres } = useFilteredChinks(genre)
  const [chunk, setChunk] = useState(20)
  useEffect(() => {
    fetchChunk(0, chunk)
  }, [chunk, genre])

  const selectGenre = (value) => {
    setGenre(value)
  }
  return (
    <>
      <section className="Navigation">
        <SearchInput />
        <GenresNav genres={genres} currentGenre={genre} selectGenre={selectGenre} />
      </section>
      <ShowsGrid shows={filteredChunk} />
      <button onClick={() => setChunk(chunk + 20)}>Show More</button>
    </>
  )
}

export default Home

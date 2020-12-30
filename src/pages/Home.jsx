import React, { useEffect, useState } from 'react'
import useFilteredChinks from '../hooks/useFilteredChunks'

import SearchInput from '../components/SearchInput'
import GenresNav from '../components/GenresNav'
import SearchResults from '../containers/SearchResults'
import ShowsGrid from '../containers/ShowsGrid'
import '../styles/pages/home.css'

function Home() {
  const [genre, setGenre] = useState('Comedy')
  const { filteredChunk, fetchChunk, genres, shows } = useFilteredChinks(genre)
  const [chunk, setChunk] = useState(5)
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetchChunk(0, chunk)
  }, [chunk, genre])

  const selectGenre = (value) => {
    setGenre(value)
  }
  const handleSearch= (value) => {
    setSearch(value)
  }
  return (
    <section className="Home">
      <section className="Navigation">
        <SearchInput handleSearch={handleSearch} />
        <GenresNav genres={genres} currentGenre={genre} selectGenre={selectGenre} />
      </section>
      <section className="ShowsSection" >
        {
          search.length > 3 &&
          <>
            <p className="SectionTitle">Search results...</p>
            <hr/>
            <SearchResults shows={shows} search={search} />
          </>
        }
        <p className="SectionTitle" >Shows</p>
        <hr/>
        <ShowsGrid shows={filteredChunk} />
        <button className="ShowsSection-button" onClick={() => setChunk(chunk + 5)}>Show More</button>
      </section>
    </section>
  )
}

export default Home

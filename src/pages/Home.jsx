import React, { useEffect, useState } from 'react'
import useFilteredChinks from '../hooks/useFilteredChunks'

import SearchInput from '../components/SearchInput'

function Home() {
  const [genre, setGenre] = useState('Comedy')
  const { filteredChunk, fetchChunk } = useFilteredChinks(genre)
  const [chunk, setChunk] = useState(20)

  useEffect(() => {
    fetchChunk(0, chunk)
  }, [chunk, genre])


  console.log(filteredChunk)
  return (
    <>
      <SearchInput />
      <button onClick={() => setChunk(chunk + 20)}>Click me</button>
      <button onClick={() => setGenre('Drama')} >Change genre to 'Drama'</button>
    </>
  )
}

export default Home

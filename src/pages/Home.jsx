import React, { useEffect, useState } from 'react'

import SearchInput from '../components/SearchInput'

function Home() {
  useEffect(() => {
    fetch('http://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => {
        const filteredShowsByGenre = data.filter(show => show.genres.includes('Action'))
        console.log(filteredShowsByGenre)
      })
  }, [])
  return (
    <>
      <SearchInput />
    </>
  )
}

export default Home

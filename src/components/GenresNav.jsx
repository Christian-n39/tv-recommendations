import React, { useState, useEffect } from 'react'
import '../styles/components/genresNav.css'

function GenresNav({ genres, currentGenre, selectGenre }) {
  const [showFixed, setShowFixed] = useState(false);
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 130
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  return (
    <>
      <div className="Nav">
        <p>Select genre</p>
        <select onChange={e => selectGenre(e.target.value)} value={currentGenre} className="Nav-options">
          {
            genres.map(genre => (
              <option key={genre} value={genre} className="Nav-option">{genre}</option>
            ))
          }
        </select>
      </div>
      {
        showFixed && <p className="current-genre">Current genre: {currentGenre}</p>
      }
    </>
  )
}

export default React.memo(GenresNav)

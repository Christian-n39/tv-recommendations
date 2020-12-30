import React from 'react'
import '../styles/components/genresNav.css'

function GenresNav({ genres, currentGenre, selectGenre }) {
  return (
    <div className="Nav">
      <select onChange={e => selectGenre(e.target.value)} value={currentGenre} className="Nav-options">
        {
          genres.map(genre => (
            <option key={genre} value={genre} className="Nav-option">{genre}</option>
          ))
        }
      </select>
    </div>
  )
}

export default GenresNav

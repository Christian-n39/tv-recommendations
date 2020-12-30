import React from 'react'
import { Link } from 'react-router-dom'

import Show from '../components/Show'

function SearchResults({ shows, search }) {
  const results = shows.filter(show => show.name.toLowerCase().includes(search.toLowerCase())).slice(0, 10)
  return (
    <div className="ShowsGrid" >
      {
        results.map(show => (
          <Link key={show.id} to={`/shows/${show.id}`}>
            <Show show={show} />
          </Link>
        ))
      }
    </div>
  )
}

export default SearchResults

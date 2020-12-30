import React from 'react'

import Show from '../components/Show'

function SearchResults({ shows, search }) {
  const results = shows.filter(show => show.name.toLowerCase().includes(search.toLowerCase())).slice(0, 10)
  return (
    <div className="ShowsGrid" >
      {
        results.map(show => (
          <Show key={show.id} show={show} />
        ))
      }
    </div>
  )
}

export default SearchResults

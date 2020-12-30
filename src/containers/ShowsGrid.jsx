import React from 'react'

import Show from '../components/Show'
import '../styles/containers/showsGrid.css'

function ShowsGrid({ shows }) {
  return (
    <div className="ShowsGrid" >
      {
        shows.map(show => (
          <Show key={show.id} show={show} />
        ))
      }
    </div>
  )
}

export default ShowsGrid

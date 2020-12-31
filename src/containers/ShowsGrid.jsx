import React from 'react'
import { Link } from 'react-router-dom'

import Show from '../components/Show'
import '../styles/containers/showsGrid.css'

function ShowsGrid({ shows }) {
  return (
    <div className="ShowsGrid" >
      {
        shows.length
          ?
        shows.map(show => (
          <Link key={show.id} to={`/shows/${show.id}`}>
            <Show show={show} />
          </Link>
        ))
        : <p>Loading...</p>
      }
    </div>
  )
}

export default ShowsGrid

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Show from '../components/Show'
import '../styles/containers/showsGrid.css'

function ShowsGrid({ shows, showMore }) {
  return (
    <>
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
      <button className="ShowsSection-button" onClick={showMore}>Show More</button>
    </>
  )
}

export default ShowsGrid

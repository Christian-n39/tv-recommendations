import React from 'react'

function ShowsGrid({ shows }) {
  return (
    <section>
      {
        shows.map(show => (
          <p key={show.id} >{show.name}</p>
        ))
      }
    </section>
  )
}

export default ShowsGrid

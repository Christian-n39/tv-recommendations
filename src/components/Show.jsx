import React from 'react'

import '../styles/components/show.css'

function Show({ show }) {
  const rating = show.rating.average
  return (
    <article className="Show" >
      <figure>
        <img src={show.image.medium} alt={show.name} width='210' />
      </figure>
      <div className="Show-description" >
        <h1>{show.name}</h1>
        <p>
          Rating:
          <span className={rating <4 ? 'isLow' : rating <= 7 ? 'isRegular' : 7 < rating ? 'isHigh' : undefined}>
            {'  '}{rating}
          </span>
        </p>
      </div>
    </article>
  )
}

export default React.memo(Show)

import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useSingleShow from '../hooks/useSingleShow'
import '../styles/pages/singleShow.css'

function SingleShow() {
  const { id } = useParams()
  const { show, fetchSingleShow } = useSingleShow()

  useEffect(() => {
    fetchSingleShow(id)
  }, [])
  return (
    <div className="SingleShow" >
      <article className="SingleShow-badge" >
        {
          Object.keys(show).length ?
          <>
            <figure>
              <img className="SingleShow-image" src={show.image.original} width='210' alt="image"/>
            </figure>
            <div className="SingleShow-description">
              <h1>{show.name}</h1>
                {
                <div className="SingleShow-description-extra">
                    <p className="label">Status</p>
                    <span>{show.status}</span>
                    <p className="label">Genres</p>
                    {
                      <div className="Genres">
                        {show.genres.map(genre => (
                          <span key={genre}>{genre}</span>
                        ))}
                      </div>
                    }
                </div>
              }
              <div className="Description" dangerouslySetInnerHTML={{__html: show.summary}} />
            </div>
          </>
          : <p>Loading</p>
        }
      </article>
      <Link to='/' className="Link" >
        Go Back
      </Link>
    </div>
  )
}

export default SingleShow

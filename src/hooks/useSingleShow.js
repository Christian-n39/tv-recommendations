import { useState } from 'react'

function useSingleShow() {
  const [show, setShow] = useState({})
  const fetchSingleShow = (id) => {
    fetch(`http://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => {
        setShow(data)
      })
  }
  return { show, fetchSingleShow }
}

export default useSingleShow

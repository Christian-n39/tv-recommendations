import React from 'react'
import '../styles/components/searchInput.css'

function SearchInput({ handleSearch }) {
  return (
    <div  className="Search">
      <input type="search" onChange={e => handleSearch(e.target.value)} placeholder="Search show by name..." />
    </div>
  )
}

export default React.memo(SearchInput)

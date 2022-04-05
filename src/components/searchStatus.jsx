import React from 'react'

const SearchStatus = ({length}) => {
  return length !== 0 ? <h1 className="btn btn-primary">З тобою тусане {length} людей</h1>
    : <h1 className="btn btn-danger">З тобою ніхто не тусане</h1>
}
export default SearchStatus
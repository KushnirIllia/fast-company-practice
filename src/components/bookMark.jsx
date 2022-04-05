import React from 'react'

const BookMark = ({status, onClick}) => {
  return <button onClick={onClick}>{status ? <i className="bi bi-bookmark-check-fill"/> : <i className="bi bi-bookmark"/>}</button>
}
export default BookMark
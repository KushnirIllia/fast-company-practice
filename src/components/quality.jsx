import React from 'react'

const Quality = ({
                   name,
                   color
                 }) => {

  return <span className={`badge bg-${color} me-2`}>{name}</span>
}
export default Quality
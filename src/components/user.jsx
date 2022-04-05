import React from 'react'
import Quality from './quality'
import BookMark from './bookMark'

const User = ({
                _id,
                name,
                profession,
                qualities,
                completedMeetings,
                rate,
                bookmark,
                onDelete,
                onToggleBookMark
              }) => {

  return (
    <>
      <tr>
        <th scope="row">{name}</th>
        <td>{qualities.map(quality => {
          return <Quality key={quality._id}{...quality}/>
        })}</td>
        <td key={profession._id}>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate} / 5</td>
        <td><BookMark status={bookmark} onClick={() => onToggleBookMark(_id)}/></td>
        <td>
          <button className="btn btn-danger" onClick={()=>onDelete(_id)}>Delete</button>
        </td>
      </tr>
    </>
  )
}
export default User
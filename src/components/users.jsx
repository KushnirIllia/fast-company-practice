import React from 'react'
import User from './user'

const Users = ({
                 users,
                 ...rest
               }) => {

  return (
    users.length !== 0 ?
      <>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Ім'я</th>
            <th scope="col">Якості</th>
            <th scope="col">Професія</th>
            <th scope="col">Кільк. зустрічей</th>
            <th scope="col">Оцінка</th>
            <th scope="col"/>
            <th scope="col"/>
          </tr>
          </thead>
          <tbody>
          {users.map(user => {
            return <User key={user._id} {...user} {...rest}/>
          })}
          </tbody>
        </table>
      </> : ''
  )
}
export default Users
import React, {useState} from 'react'
import API from './api'
import Users from './components/users'
import SearchStatus from './components/searchStatus'

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll())
  const handleDelete = (userId) => {
    let newUsers = [...users]
    newUsers = newUsers.filter(u => u._id !== userId)
    setUsers(newUsers)
  }
  const handleToggleBookMark = (userId) => {
    let newUsers = [...users]
    newUsers = newUsers.map(u => {
      return u._id === userId ? {...u, bookmark: !u.bookmark} : u
    })

    setUsers(newUsers)
  }
  return (
    <>
      <SearchStatus length={users.length}/>
      <Users users={users} onDelete={handleDelete} onToggleBookMark={handleToggleBookMark}/>
    </>
  )
}
export default App
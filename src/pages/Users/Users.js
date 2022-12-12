import React from 'react'
import { users as userData } from '../../Data/Users'

export default function Users() {
  const renderUsers = () => {
    return userData.map((user, idx) => (
      <div key={idx}>{`${idx + 1}. ${user.first_name} ${user.last_name}`}</div>
    ))
  }

  return (
    <div>
      <div>Users</div>
      {renderUsers()}
    </div>
  )
}

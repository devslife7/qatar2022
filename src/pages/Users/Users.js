import React from 'react'
import { useEffect, useState } from 'react'

const serverURL = process.env.REACT_APP_SERVER_URL

export default function Users() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    fetch(serverURL + '/usersAll')
      .then(resp => resp.json())
      .then(data => setUserData(data.users))
      .catch(err => console.log(err))
  }, [])

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

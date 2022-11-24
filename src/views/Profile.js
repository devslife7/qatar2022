import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Profile() {
  const location = useLocation()
  const user = location.state.user
  const userPredictions = user.predictionsGS
  const fixtures = location.state.fixtures
  return (
    <>
      <div>Profile</div>

      {user.first_name + '_'}
      {userPredictions.length + '_'}
      {fixtures.length}
    </>
  )
}

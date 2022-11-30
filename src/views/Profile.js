import React from 'react'
import { Container } from '../styles/Components.style'
import { Component, UserTitle } from '../styles/Profile.style'
import { useLocation } from 'react-router-dom'
import PredictionCardProfile from '../assets/PredictionCardProfile'

export default function Profile() {
  const location = useLocation()
  const user = location.state.user
  const userPredictions = user.predictionsGS
  const fixtures = location.state.fixtures
  const officialResults = location.state.officialResults

  const renderPredictions2 = () => {
    return fixtures.map((fixture, idx) => (
      <PredictionCardProfile
        key={idx}
        idx={idx}
        userPrediction={userPredictions[idx]}
        fixture={fixture}
        officialResult={officialResults[idx]}
        officialResultsLength={officialResults.length}
      />
    ))
  }

  return (
    <Component>
      <Container>
        <UserTitle>{user.first_name + ' ' + user.last_name}</UserTitle>
        {renderPredictions2()}
      </Container>
    </Component>
  )
}

import React from 'react'
import { Container } from '../styles/Components.style'
import { Component, UserTitle } from '../styles/Profile.style'
import { useLocation } from 'react-router-dom'
import PredictionCardProfile from '../assets/PredictionCardProfile'
// import { countryCodes } from '../helpers/Data'

export default function Profile() {
  const location = useLocation()
  const user = location.state.user
  const userPredictions = user.predictionsGS
  const fixtures = location.state.fixtures
  const officialResults = location.state.officialResults

  const renderPredictions2 = () => {
    // const officialResults = getOfficialResult()

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

  // const renderPredictions = () => {
  //   const asignCheck = (prediction, idx) => {
  //     if (officialResults.length <= idx) return // Only run funciton if official prediction exists
  //     return prediction === officialResults[idx] ? ' ---- ✓' : ' ----- X'
  //   }

  //   return userPredictions.map((prediction, idx) => (
  //     <div key={idx} style={{ marginLeft: '25vw', fontSize: '1.5rem' }}>
  //       {countryCodes[prediction]}
  //       {asignCheck(prediction, idx)}
  //     </div>
  //   ))
  // }

  return (
    <Component>
      <Container>
        <UserTitle>{user.first_name + ' ' + user.last_name}</UserTitle>
        {renderPredictions2()}
      </Container>
    </Component>
  )
}

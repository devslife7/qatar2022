import React from 'react'
import { Container } from '../../assets/Global.style'
import { Section, UserTitle } from './components/Profile.style'
import { useLocation } from 'react-router-dom'
import PredictionCardProfile from './components/PredictionCardProfile'

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
    <Section>
      <Container>
        <UserTitle>{user.first_name + ' ' + user.last_name}</UserTitle>
        {renderPredictions2()}
      </Container>
    </Section>
  )
}

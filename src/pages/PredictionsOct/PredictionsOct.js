import React, { useState } from 'react'
import MatchCard from './components/MatchCard'
import { Container } from '../../assets/styles/Global.style'
import { Matches, NameInputs, Section, Title } from './styles/PredictionsOct.style'

export default function PredictionsOct({ fixtures }) {
  const [userPredictions, setUserPredictions] = useState([])

  const handleUserPredictions = prediction => {
    if (userPredictions.includes(prediction)) {
      const index = userPredictions.indexOf(prediction)
      if (index > -1) {
        // only splice array when item is found
        userPredictions.splice(index, 1) // 2nd parameter means remove one item only
      }
    } else {
      setUserPredictions([...userPredictions, prediction])
    }
  }

  const RoundOf16Fixtures = fixtures.filter(fixture => fixture.league.round === 'Round of 16')
  const renderMatches = () => {
    return RoundOf16Fixtures.map((fixture, idx) => (
      <MatchCard
        key={idx}
        fixture={fixture}
        handleUserPredictions={handleUserPredictions}
        userPredictions={userPredictions}
      />
    ))
  }
  return (
    <Section>
      {console.log(userPredictions)}
      <Container>
        <Title>Predictions Octavos</Title>
        <Matches>{renderMatches()}</Matches>
        <NameInputs>
          <div>Name inputs here</div>
        </NameInputs>
      </Container>
    </Section>
  )
}

import React, { useState } from 'react'
import MatchCard from './components/MatchCard'
import { Container } from '../../assets/styles/Global.style'
import { Button, Matches, NameInputs, Section, Title } from './styles/PredictionsOct.style'

export default function PredictionsOct({ fixtures }) {
  const [userPredictions, setUserPredictions] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

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

  const handlePredictionSubmit = e => {
    const serverURL = process.env.REACT_APP_SERVER_URL

    const postRequest = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          first_name: firstName,
          last_name: lastName,
          predictions16: userPredictions,
        },
      }),
    }

    fetch(serverURL + '/users', postRequest)
      .then(resp => resp.json())
      .then(data => {
        console.log('data from fetch: ', data)
        clearInputs()
      })
      .catch(err => console.log(err))
  }

  const clearInputs = () => {
    setUserPredictions([])
    setFirstName('')
    setLastName('')
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
      {console.log('firstName: ', lastName)}
      <Container>
        <Title>Predictions Octavos</Title>
        <Matches>{renderMatches()}</Matches>
        <NameInputs>
          <div style={{ margin: '30px 0 10px 0' }}>First Name</div>
          <input label='first_name' value={firstName} onChange={e => setFirstName(e.target.value)} />
          <div style={{ margin: '30px 0 10px 0' }}>Last name</div>
          <input label='last_name' value={lastName} onChange={e => setLastName(e.target.value)} />
          <Button style={{ margin: '20px 0' }} onClick={handlePredictionSubmit}>
            Submit Predictions
          </Button>
        </NameInputs>
      </Container>
    </Section>
  )
}

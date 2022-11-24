import React from 'react'
import '../styles/Profile.css'
import { useLocation } from 'react-router-dom'
import FixtureCard from '../assets/FixtureCard'

const countryCodes = {
  A1: 'Qatar',
  A2: 'Ecuador',
  A3: 'Senegal',
  A4: 'Netherlands',

  B1: 'England',
  B2: 'Iran',
  B3: 'USA',
  B4: 'Wales',

  C1: 'Argentina',
  C2: 'Saudi Arabia',
  C3: 'Mexico',
  C4: 'Poland',

  D1: 'France',
  D2: 'Australia',
  D3: 'Denmark',
  D4: 'Tunisia',

  E1: 'Spain',
  E2: 'Costa Rica',
  E3: 'Germany',
  E4: 'Japan',

  F1: 'Belgium',
  F2: 'Canada',
  F3: 'Morocco',
  F4: 'Croatia',

  G1: 'Brazil',
  G2: 'Serbia',
  G3: 'Switzerland',
  G4: 'Cameroon',

  H1: 'Portugal',
  H2: 'Ghana',
  H3: 'Uruguay',
  H4: 'South Korea',

  TIE: 'TIE',
}

export default function Profile() {
  const location = useLocation()
  const user = location.state.user
  const userPredictions = user.predictionsGS
  const fixtures = location.state.fixtures

  const renderPredictions = () => {
    const officialResults = getOfficialResult()

    return fixtures.map((fixture, idx) => (
      <div key={idx}>
        <FixtureCard fixture={fixture} />
      </div>
    ))
  }
  // return

  const getOfficialResult = () => {
    let officialResults = []
    fixtures.forEach(fixture => {
      const gameStatus = fixture.fixture.status.short
      const goalsHome = fixture.goals.home
      const goalsAway = fixture.goals.away
      const homeTeamId = fixture.teams.home.id
      const awayTeamId = fixture.teams.away.id

      if (gameStatus === 'FT') {
        // if (goalsHome === goalsAway) officialResults.push('TIE')
        // else if (goalsHome > goalsAway) officialResults.push(resultsIdCodesKey[homeTeamId])
        // else officialResults.push(resultsIdCodesKey[awayTeamId])
      }
    })
    return officialResults
  }

  return (
    <>
      <div className='profile'>
        <div className='container'>
          <div>Profile</div>

          {user.first_name + '_'}
          {userPredictions.length + '_'}
          {fixtures.length}
          {renderPredictions()}
        </div>
      </div>
    </>
  )
}

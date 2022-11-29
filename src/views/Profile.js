import React from 'react'
import '../styles/Profile.css'
import { useLocation } from 'react-router-dom'
import PredictionCardProfile from '../assets/PredictionCardProfile'

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
  const officialResults = location.state.officialResults

  const renderPredictions2 = () => {
    // const officialResults = getOfficialResult()

    return fixtures.map((fixture, idx) => (
      <div key={idx}>
        <PredictionCardProfile userPrediction={userPredictions[idx]} fixture={fixture} />
      </div>
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
    <>
      <div className='profile'>
        <div className='container'>
          <div style={{ fontSize: '2rem', textAlign: 'center', padding: '40px 0 40px 0' }}>
            {user.first_name + ' ' + user.last_name}
          </div>
          {renderPredictions2()}
        </div>
      </div>
    </>
  )
}

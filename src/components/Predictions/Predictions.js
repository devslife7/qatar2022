import React, { useEffect, useState } from 'react'
import './Predictions.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
// import Divider from '@mui/material/Divider'
import PredictionsCard from './PredictionsCard'

const serverURL = process.env.REACT_APP_SERVER_URL

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
}
const finalResutArray = [
  'F4',
  'E3',
  'B2',
  'H4',
  'F4',
  'D2',
  'C1',
  'E1',
  'C4',
  'D2',
  'F3',
  'E1',
  'H1',
  'G4',
  'C1',
  'G1',
  'C4',
  'A2',
  'C4',
  'A3',
  'A3',
  'B4',
  'A1',
  'A1',
  'B4',
  'H3',
  'B2',
  'E4',
  'C1',
  'C3',
  'G4',
  'E3',
  'D2',
  'C2',
  'F1',
  'G3',
  'A2',
  'G2',
  'D1',
  'G1',
  'F3',
  'D2',
  'C1',
  'H3',
  'F3',
  'A1',
  'D4',
  'F3',
]

export default function Predictions() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch(serverURL + '/users')
      .then(resp => resp.json())
      .then(data => setUserData(data.users))
      .catch(err => console.log(err))
  }, [])

  const userPredictions = () => {
    const usersWithCalculatedRightMatches = userData.map(user => {
      let rightMatches = findMatches(finalResutArray, user.predictionsGS)
      return { ...user, rightMatches: rightMatches }
    })

    const sortedUsers = usersWithCalculatedRightMatches.sort((a, b) => b.rightMatches - a.rightMatches)
    return sortedUsers.map((user, idx) => (
      <Grid container key={idx} style={{ margin: '12px 0 12px 0' }}>
        <PredictionsCard key={idx} user={user} />
        {/* <Divider style={{ width: '100%', margin: '15px 0 15px 0' }} /> */}
      </Grid>
    ))
  }

  const findMatches = (officialResult = [], predictions = []) => {
    let counter = 0
    for (let i = 0; i < officialResult.length; i++) {
      officialResult[i] === predictions[i] && counter++
    }
    return counter
  }

  const pricePool = 1250

  return (
    <div className='predictions'>
      <div className='predictions__content container'>
        {/* <h2 className='predictions__title'>Predictions</h2> */}

        <Paper style={{ marginTop: '2.5rem' }}>
          <Grid
            container
            spacing={2}
            className='predictions_containerGrid'
            style={{ padding: '5px 17px 5px 17px' }}
          >
            {userPredictions()}
          </Grid>
        </Paper>

        <Paper>
          <p
            style={{
              fontSize: '2.3rem',
              fontWeight: 900,
              color: '#AB0E3C',
              textAlign: 'center',
              marginBottom: '1rem',
              paddingTop: '1rem',
            }}
          >
            Price Pool {`  $${pricePool}`}
          </p>
          <p
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#AB0E3C',
              textAlign: 'center',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          >
            1st {` $${pricePool * 0.6}`}
          </p>
          <p
            style={{
              fontSize: '1.7rem',
              fontWeight: 700,
              color: '#AB0E3C',
              textAlign: 'center',
              marginTop: 0,
              marginBottom: '1rem',
            }}
          >
            2nd {` $${pricePool * 0.3}`}
          </p>
          <p
            style={{
              fontSize: '1.6rem',
              fontWeight: 600,
              marginBottom: '4rem',
              color: '#AB0E3C',
              textAlign: 'center',
              marginTop: '1rem',
              paddingBottom: '1.5rem',
            }}
          >
            3rd {`$${pricePool * 0.1}`}
          </p>
        </Paper>
      </div>
    </div>
  )
}

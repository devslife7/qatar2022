import React, { useEffect, useState } from 'react'
import './Predictions.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
// import Divider from '@mui/material/Divider'
import PredictionsCard from './PredictionsCard'

const serverURL = process.env.REACT_APP_SERVER_URL

// const finalResutArray = [
//   'A2',
//   'B1',
//   'A4',
//   'B3',
//   'C1',
//   'D3',
//   'C4',
//   'D1',
//   'F4',
//   'E3',
//   'E1',
//   'F1',
//   'G4',
//   'H3',
//   'H1',
//   'G1',
//   'B4',
//   'A1',
//   'A4',
//   'B1',
//   'D4',
//   'C4',
//   'D1',
//   'C1',
//   'E2',
//   'F1',
//   'F4',
//   'E3',
//   'G4',
//   'H2',
//   'G1',
//   'H1',
//   'A3',
//   'A4',
//   'B1',
//   'B3',
//   'D3',
//   'D1',
//   'C1',
//   'C3',
//   'F2',
//   'TIE',
//   'E3',
//   'E1',
//   'H3',
//   'H1',
//   'G1',
//   'G3',
// ]
const officialFixtureResult = ['A2']

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
      let rightMatches = findMatches(officialFixtureResult, user.predictionsGS)
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

  const pricePool = 1950

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

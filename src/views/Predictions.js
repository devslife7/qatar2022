import React, { useEffect, useState } from 'react'
import '../styles/Predictions.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PredictionsCard from '../assets/PredictionsCard'

const serverURL = process.env.REACT_APP_SERVER_URL
const officialFixtureResult = ['A2', 'B1', 'A4', 'TIE', 'C2', 'TIE', 'TIE', 'D1']

export default function Predictions() {
  const [userData, setUserData] = useState([])
  const pricePool = userData.length * 50

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

    // Sorted alphabetically by first name
    usersWithCalculatedRightMatches.sort((a, b) => a.first_name.localeCompare(b.first_name))

    // Sort by correct predictions
    const sortedUsers = usersWithCalculatedRightMatches.sort((a, b) => b.rightMatches - a.rightMatches)

    let userRanking = 1
    let userArr = []
    for (let i = 0; i < sortedUsers.length; i++) {
      if (i !== 0) {
        sortedUsers[i].rightMatches !== sortedUsers[i - 1].rightMatches && userRanking++
      }
      userArr = [...userArr, { ...sortedUsers[i], userRanking: userRanking }]
    }

    return userArr.map((user, idx) => (
      <Grid container key={idx} style={{ margin: '12px 0 12px 0' }}>
        <PredictionsCard idx={idx} user={user} officialFixtureResult={officialFixtureResult} />
      </Grid>
    ))
  }

  // finds correct predicted matches of user
  const findMatches = (officialResult = [], predictions = []) => {
    let counter = 0
    for (let i = 0; i < officialResult.length; i++) {
      officialResult[i] === predictions[i] && counter++
    }
    return counter
  }

  return (
    <div className='predictions'>
      <div className='content container'>
        <Paper style={{ marginTop: '2.5rem' }}>
          <Grid>Search Users</Grid>
          <Grid container spacing={2} className='containerGrid' style={{ padding: '5px 10px 5px 13px' }}>
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

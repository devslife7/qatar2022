import React, { useEffect, useState } from 'react'
import '../styles/Predictions.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PredictionsCard from '../assets/PredictionsCard'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import TextField from '@mui/material/TextField'

const serverURL = process.env.REACT_APP_SERVER_URL

const resultsIdCodesKey = {
  1569: 'A1',
  2382: 'A2',
  13: 'A3',
  1118: 'A4',

  10: 'B1',
  22: 'B2',
  2384: 'B3',
  767: 'B4',

  26: 'C1',
  23: 'C2',
  16: 'C3',
  24: 'C4',

  2: 'D1',
  20: 'D2',
  21: 'D3',
  28: 'D4',

  9: 'E1',
  29: 'E2',
  25: 'E3',
  12: 'E4',

  1: 'F1',
  5529: 'F2',
  31: 'F3',
  3: 'F4',

  6: 'G1',
  14: 'G2',
  15: 'G3',
  1530: 'G4',

  27: 'H1',
  1504: 'H2',
  7: 'H3',
  17: 'H4',

  TIE: 'TIE',
}

export default function Predictions({ fixtures }) {
  const [userData, setUserData] = useState([])
  // const [searchTerm, setSearchTerm] = useState('')
  const pricePool = userData.length * 50
  const navigate = useNavigate()

  useEffect(() => {
    fetch(serverURL + '/users')
      .then(resp => resp.json())
      .then(data => setUserData(data.users))
      .catch(err => console.log(err))
  }, [])

  const userPredictions = () => {
    if (userData.length === 0) return

    const officialResults = getOfficialResult()

    // Add user right matches
    const userRightMatches = userData.map(user => {
      let rightMatches = findCorrectPredictions(officialResults, user.predictionsGS)
      return { ...user, rightMatches: rightMatches }
    })

    // Sort alphabetically || Sort by correct predictions || Add right matches
    userRightMatches.sort((a, b) => a.first_name.localeCompare(b.first_name))
    userRightMatches.sort((a, b) => b.rightMatches - a.rightMatches)
    const userArray = addUserRanking(userRightMatches)

    return userArray.map((user, idx) => (
      <Grid
        container
        key={idx}
        style={{ padding: '12px 0 12px 0', cursor: 'pointer' }}
        onClick={() => handleUserPage(user)}
      >
        <PredictionsCard idx={idx} user={user} officialFixtureResult={officialResults} />
      </Grid>
    ))
  }

  const getOfficialResult = () => {
    let officialResults = []
    fixtures.forEach(fixture => {
      const gameStatus = fixture.fixture.status.short
      const goalsHome = fixture.goals.home
      const goalsAway = fixture.goals.away
      const homeTeamId = fixture.teams.home.id
      const awayTeamId = fixture.teams.away.id

      if (gameStatus === 'FT') {
        if (goalsHome === goalsAway) officialResults.push('TIE')
        else if (goalsHome > goalsAway) officialResults.push(resultsIdCodesKey[homeTeamId])
        else officialResults.push(resultsIdCodesKey[awayTeamId])
      }
    })
    return officialResults
  }

  // Add user ranking to array
  const addUserRanking = sortedUsers => {
    let userRanking = 1
    let userArray = []
    for (let i = 0; i < sortedUsers.length; i++) {
      if (i !== 0) sortedUsers[i].rightMatches !== sortedUsers[i - 1].rightMatches && userRanking++
      userArray = [...userArray, { ...sortedUsers[i], userRanking: userRanking }]
    }
    return userArray
  }

  // Find correct predicted matches
  const findCorrectPredictions = (officialResult = [], predictions = []) => {
    if (officialResult.length === 0) return
    let correctPredictions = 0
    for (let i = 0; i < officialResult.length; i++) {
      officialResult[i] === predictions[i] && correctPredictions++
    }
    return correctPredictions
  }

  const handleUserPage = user => {
    console.log(fixtures)
    navigate('/profile', { state: { user: user, fixtures: fixtures } })
  }

  return (
    <div className='predictions'>
      <div className='content container'>
        <Paper className='paper'>
          {/* <Grid container justifyContent='center'>
            <TextField
              id='search-bar'
              label='Search Users'
              value={searchTerm}
              variant='standard'
              className='predictions_searchBar'
              style={{ margin: '6px 0 20px 0', fontSize: '1.3rem', width: '20rem' }}
              onChange={e => setSearchTerm(e.nativeEvent.value)}
            />
          </Grid> */}
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

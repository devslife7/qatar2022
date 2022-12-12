import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PredictionsCard from './components/PredictionsCard'
import { useNavigate } from 'react-router-dom'
import { resultsIdCodesKey } from '../../Data/CountryCodes'
import {
  // ButtonWrapper,
  PredictionsWrapper,
  Text1st,
  Text2nd,
  Text3rd,
  TextPricePool,
} from './Main.styles'
// import Button from '../../components/Button'
import { Container } from '../../assets/styles/Global.style'
import { users as userData } from '../../Data/Users'

export default function Predictions({ fixtures }) {
  const pricePool = userData.length * 50
  const navigate = useNavigate()

  const renderUserPredictions = () => {
    if (userData.length === 0) return

    const officialResults = getOfficialResult()

    // Add user right matches
    const userRightMatches = userData.map(user => {
      let rightMatches = findCorrectPredictions(officialResults, user.predictionsGS)
      return { ...user, rightMatches: rightMatches }
    })

    // Sort users alphabetically || Sort by correct predictions || Add right matches
    userRightMatches.sort((a, b) => a.first_name.localeCompare(b.first_name))
    userRightMatches.sort((a, b) => b.rightMatches - a.rightMatches)
    const userArray = addUserRanking(userRightMatches)

    return userArray.map((user, idx) => (
      <Grid
        container
        key={idx}
        style={{ padding: '12px 0 12px 0', cursor: 'pointer' }}
        onClick={() => handleUserPage(user, officialResults)}
      >
        <PredictionsCard idx={idx} user={user} officialFixtureResult={officialResults} />
      </Grid>
    ))
  }
  // Get official results array from fixtures
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
  const handleUserPage = (user, officialResults) => {
    // console.log(fixturesSorted)
    navigate('/profile', {
      state: { user: user, fixtures: fixtures, officialResults: officialResults },
    })
  }
  // const handleRoundOf16 = () => {
  //   // console.log(fixturesSorted)
  //   // navigate('/octavos')
  // }

  return (
    <PredictionsWrapper className='predictions'>
      <Container>
        <Paper style={{ marginTop: '2.5rem' }}>
          <Grid container spacing={2} style={{ padding: '5px 10px 5px 13px', fontSize: '1.3rem' }}>
            {renderUserPredictions()}
          </Grid>
        </Paper>

        <Paper>
          <TextPricePool>Price Pool {`  $${pricePool}`}</TextPricePool>
          <Text1st>1st {` $${pricePool * 0.6}`}</Text1st>
          <Text2nd>2nd {` $${pricePool * 0.3}`}</Text2nd>
          <Text3rd>3rd {` $${pricePool * 0.1}`}</Text3rd>
        </Paper>

        {/* <Buttonwrapper>
          <Button onClick={handleRoundOf16} disabled>
            Round of 16 Predictions
          </Button>
        </Buttonwrapper> */}
      </Container>
    </PredictionsWrapper>
  )
}

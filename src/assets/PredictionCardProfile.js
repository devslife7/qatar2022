import React from 'react'
import { countryCodesShort, resultsIdCodesKeyReverse } from '../helpers/Data'
import { AwayTeam, Card, Fixtures, Flag, GameScore, HomeTeam, Predictions } from '../styles/Profile.style'

export default function PredictionCardProfile({ fixture, userPrediction }) {
  // console.log('Fixture: ', fixture)
  console.log('Fixture: ', resultsIdCodesKeyReverse[userPrediction])
  const userPredictionId = resultsIdCodesKeyReverse[userPrediction]
  const userPredictionName = countryCodesShort[userPrediction]
  const countryFlagSrc = `https://media.api-sports.io/football/teams/${userPredictionId}.png`
  const homeFlag = fixture.teams.home.logo
  const awayFlag = fixture.teams.away.logo

  // const correctPrediction
  return (
    <Card>
      <Predictions correct>
        <div style={{ marginRight: '10px' }}>{userPredictionName}</div>
        {userPredictionName !== 'TIE' && <Flag src={countryFlagSrc} />}
      </Predictions>
      <Fixtures>
        <HomeTeam>
          <span>{fixture.teams.home.name}</span>
          <Flag src={homeFlag} />
        </HomeTeam>
        <GameScore>
          <div>vs</div>
        </GameScore>
        <AwayTeam>
          <Flag src={awayFlag} />
          <span>{fixture.teams.away.name}</span>
        </AwayTeam>
      </Fixtures>
    </Card>
  )
}

{
  /* <Grid item xs={5}>
          <Grid container alignItems='center' justifyContent='flex-end'>
            <span style={{ marginRight: '10px' }}>{fixture.teams.home.name}</span>
            <img src={fixture.teams.home.logo} style={{ width: '30px', height: '20px' }} alt='country flag' />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction='column' alignItems='center'>
            {fixture.fixture.status.short === 'NS' ? (
              <div>{format(fromUnixTime(fixture.fixture.timestamp), 'HH:mm')}</div>
            ) : (
              <>
                <span>
                  {fixture.goals.home} - {fixture.goals.away}
                </span>
                <span style={{ fontSize: '0.7em' }}>{fixture.fixture.status.short}</span>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container alignItems='center'>
            <img src={fixture.teams.away.logo} style={{ width: '30px', height: '20px' }} alt='country flag' />
            <span style={{ marginLeft: '10px' }}>{fixture.teams.away.name}</span>
          </Grid>
        </Grid> */
}

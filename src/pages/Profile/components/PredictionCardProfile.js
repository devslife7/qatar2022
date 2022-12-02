import React from 'react'
import {
  countryCodesShort,
  resultsIdCodesKeyReverse,
  countryCodesShortFromName,
} from '../../../Data/CountryCodes'
import { AwayTeam, Card, Fixtures, Flag, GameScore, HomeTeam, Predictions } from '../styles/Profile.style'
import { fromUnixTime, format } from 'date-fns'

export default function PredictionCardProfile({
  idx,
  fixture,
  userPrediction,
  officialResult,
  officialResultsLength,
}) {
  const userPredictionId = resultsIdCodesKeyReverse[userPrediction]
  const userPredictionName = countryCodesShort[userPrediction]
  const countryFlagSrc = `https://media.api-sports.io/football/teams/${userPredictionId}.png`
  const homeFlag = fixture.teams.home.logo
  const awayFlag = fixture.teams.away.logo
  const homeTeamName = countryCodesShortFromName[fixture.teams.home.name]
  const awayTeamName = countryCodesShortFromName[fixture.teams.away.name]

  const prediction = officialResult === userPrediction

  const correctPrediction = () => {
    if (idx >= officialResultsLength) return
    if (officialResult === userPrediction) return 'correct'
    if (officialResult !== userPrediction) return 'incorrect'
  }

  return (
    <Card>
      <Predictions correctPrediction={correctPrediction()}>
        <div style={{ marginRight: '10px' }}>{userPredictionName}</div>
        {userPredictionName !== 'TIE' && <Flag src={countryFlagSrc} />}
      </Predictions>
      <Fixtures>
        <HomeTeam>
          <span style={{ marginRight: '10px' }}>{homeTeamName}</span>
          <Flag src={homeFlag} />
        </HomeTeam>
        <GameScore>
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
        </GameScore>
        <AwayTeam>
          <Flag src={awayFlag} />
          <span style={{ marginLeft: '10px' }}>{awayTeamName}</span>
        </AwayTeam>
      </Fixtures>
    </Card>
  )
}

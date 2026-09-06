import { countryFlags } from '../../../Data/CountryFlags'
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
  const countryFlagSrc = countryFlags[userPredictionId]
  const homeFlag = countryFlags[fixture.teams.home.id]
  const awayFlag = countryFlags[fixture.teams.away.id]
  const homeTeamName = countryCodesShortFromName[fixture.teams.home.name]
  const awayTeamName = countryCodesShortFromName[fixture.teams.away.name]

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

import React from 'react'
import { countryCodesShort, resultsIdCodesKeyReverse } from '../helpers/Data'
import { Card, Fixtures, Flag, Predictions } from '../styles/Profile.style'

export default function PredictionCardProfile({ fixture, userPrediction }) {
  // console.log('Fixture: ', fixture)
  // console.log('Fixture: ', countryCodes[userPrediction])
  const userPredictionId = resultsIdCodesKeyReverse[userPrediction]
  const userPredictionName = countryCodesShort[userPrediction]
  const countryFlagSrc = `https://media.api-sports.io/football/teams/${userPredictionId}.png`
  const homeFlag = fixture.teams.home.logo
  const awayFlag = fixture.teams.away.logo
  return (
    <Card>
      <Predictions>
        <div style={{ marginRight: '20px' }}>{userPredictionName}</div>
        {userPredictionName !== 'TIE' && <Flag src={countryFlagSrc} />}
      </Predictions>
      <Fixtures>
        <div style={{ backgroundColor: 'green', opacity: '0.7' }}>{fixture.teams.home.name}</div>
        <Flag src={homeFlag} />
        <div>vs</div>
        <Flag src={awayFlag} />
        <div>{fixture.teams.away.name}</div>
      </Fixtures>
    </Card>
  )
}

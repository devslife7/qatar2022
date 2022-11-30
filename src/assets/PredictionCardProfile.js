import React from 'react'
import '../styles/Profile.css'
import { countryCodesShort } from '../helpers/Data'
import { Card, Fixtures, Flag, Predictions } from '../styles/Profile.style'

export default function PredictionCardProfile({ fixture, userPrediction }) {
  // console.log('Fixture: ', fixture)
  // console.log('Fixture: ', countryCodes[userPrediction])
  const countryFlag = countryCodesShort[`${userPrediction + 'Flag'}`]
  const homeFlag = fixture.teams.home.logo
  const awayFlag = fixture.teams.away.logo
  return (
    <Card>
      <Predictions>
        <div>{countryCodesShort[userPrediction]}</div>
        <Flag src={countryFlag} />
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

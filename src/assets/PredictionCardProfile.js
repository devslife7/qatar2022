import React from 'react'
import '../styles/Profile.css'
import { countryCodesShort } from '../helpers/Data'

export default function PredictionCardProfile({ fixture, userPrediction }) {
  console.log('Fixture: ', fixture)
  // console.log('Fixture: ', countryCodes[userPrediction])
  const countryFlag = countryCodesShort[`${userPrediction + 'Flag'}`]
  return (
    <div className='predictionCardProfile'>
      <div className='profile__predictions'>
        <div>{countryCodesShort[userPrediction]}</div>
        <div>
          <img src={countryFlag} className='profile__flags' />
        </div>
      </div>
      <div className='profile__fixtures'>
        <div style={{ backgroundColor: 'green', opacity: '0.7' }}>{fixture.teams.home.name}</div>
        <img src={fixture.teams.home.logo} className='profile__flags' />
        <div>vs</div>
        <img src={fixture.teams.away.logo} className='profile__flags' />
        <div>{fixture.teams.away.name}</div>
      </div>
    </div>
  )
}

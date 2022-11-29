import React from 'react'
import '../styles/Profile.css'
import { countryCodes } from '../helpers/Data'

export default function PredictionCardProfile({ fixture, userPrediction }) {
  console.log('Fixture: ', fixture)
  // console.log('Fixture: ', countryCodes[userPrediction])
  return (
    <div className='predictionCardProfile'>
      <div className='profile__predictions'>{countryCodes[userPrediction]}</div>
      <div className='profile__fixtures'>
        <div>{fixture.teams.home.name}</div>
        <img src={fixture.teams.home.logo} className='profile__flags' />
        <div>vs</div>
        <img src={fixture.teams.away.logo} className='profile__flags' />
        <div>{fixture.teams.away.name}</div>
      </div>
    </div>
  )
}

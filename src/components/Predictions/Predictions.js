import React, { useEffect, useState } from 'react'
import './Predictions.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PredictionsCard from './PredictionsCard'

// const serverURL = process.env.REACT_APP_SERVER_URL
const serverURL = 'http://localhost:3000'

export default function Predictions() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    fetch(serverURL + '/users')
      .then(resp => resp.json())
      .then(data => setUserData(data.users))
      .catch(err => console.log(err))
  }, [])

  const userPredictions = () => {
    console.log(userData.users)
    return userData.map((user, idx) => {
      return <PredictionsCard key={idx} user={user} />
    })
  }

  return (
    <div className='predictions'>
      <div className='predictions__content container'>
        <h2 className='predictions__title'>Predictions</h2>

        <Paper>
          <Grid container spacing={2} className='predictions_containerGrid' style={{ padding: 10 }}>
            {userPredictions()}
          </Grid>
        </Paper>
      </div>
    </div>
  )
}

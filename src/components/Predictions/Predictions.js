import React from 'react'
import './Predictions.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PredictionsCard from './PredictionsCard'

export default function Predictions() {
  const userPredictions = () => {
    // return list.map((user, idx) => {
    //   return <PredictionsCard key={idx} user={user} />
    // })
    return <div>Predictions Placeholder</div>
  }

  return (
    <div className='predictions'>
      <div className='predictions__content container'>
        <h2 className='predictions__title'>Predictions</h2>

        <Paper>
          <Grid container spacing={2}>
            <div className='predictions__section'>{userPredictions()}</div>
          </Grid>
        </Paper>
      </div>
    </div>
  )
}

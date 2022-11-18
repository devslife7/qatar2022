import React from 'react'
import Grid from '@mui/material/Grid'

export default function PredictionsCard() {
  return (
    <>
      <Grid item xs={4}>
        Name
      </Grid>
      <Grid item xs={4}>
        score
      </Grid>
      <Grid item xs={4}>
        precentage
      </Grid>
    </>
  )
}

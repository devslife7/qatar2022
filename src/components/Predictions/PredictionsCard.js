import React from 'react'
import Grid from '@mui/material/Grid'

export default function PredictionsCard({ user }) {
  return (
    <>
      <Grid item container xs={6} justifyContent='center' style={{ padding: 0 }}>
        <Grid item>{user.first_name + ' ' + user.last_name}</Grid>
      </Grid>
      <Grid item container xs={3} justifyContent='center' style={{ padding: 0 }}>
        <Grid>0/48</Grid>
      </Grid>
      <Grid item container xs={3} justifyContent='center' style={{ padding: 0 }}>
        <Grid style={{ padding: 0 }}>{user.predictionsGS}</Grid>
      </Grid>
    </>
  )
}

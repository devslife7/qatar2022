import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

export default function PredictionsCard({ user }) {
  return (
    <>
      <Grid container style={{ marginBottom: '1.5rem' }}>
        <Grid item container xs={8} justifyContent='flex-start' style={{ padding: '0 0 0 10px' }}>
          <Grid item>{user.first_name + ' ' + user.last_name}</Grid>
        </Grid>
        <Grid item container xs={2} justifyContent='flex-start' style={{ padding: 0, color: 'gray' }}>
          <Grid>{`${user.rightMatches}/48`}</Grid>
        </Grid>
        <Divider />

        <Grid item container xs={2} justifyContent='flex-end' style={{ padding: 0, color: 'gray' }}>
          <Grid style={{ padding: 0 }}>{`${Math.trunc((user.rightMatches / 48) * 100)}%`}</Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  )
}

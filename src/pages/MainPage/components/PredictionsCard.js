import React from 'react'
import Grid from '@mui/material/Grid'

export default function PredictionsCard({ idx, user, officialFixtureResult }) {
  const totalMatches = officialFixtureResult.length

  return (
    <>
      <Grid
        item
        container
        xs={8}
        justifyContent='flex-start'
        style={{ padding: '0 0 0 10px', fontWeight: '448' }}
      >
        <Grid item>{user.userRanking + '. ' + user.first_name + ' ' + user.last_name}</Grid>
      </Grid>

      <Grid
        item
        container
        xs={2}
        justifyContent='flex-start'
        style={{ padding: 0, color: 'gray', fontWeight: '340', fontSize: '1.3rem' }}
      >
        <Grid>{`${user.rightMatches}/${totalMatches}`}</Grid>
      </Grid>

      <Grid
        item
        container
        xs={2}
        justifyContent='flex-end'
        style={{ padding: 0, color: 'gray', fontWeight: '340', fontSize: '1.3rem' }}
      >
        <Grid style={{ padding: 0 }}>{`${Math.trunc((user.rightMatches / totalMatches) * 100)}%`}</Grid>
      </Grid>
    </>
  )
}

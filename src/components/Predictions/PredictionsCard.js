import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
// import Divider from '@mui/material/Divider'

export default function PredictionsCard({ idx, user, officialFixtureResult }) {
  // const totalMatches = officialFixtureResult.length
  const totalMatches = 48

  // {user.rightMatches != user[idx + 1] && setuserRanking(userRanking + 1)}
  // if ((idx != 0, user.rightMatches == user[idx - 1].rightMatches)) {
  //   console.log('userRanking change: ')
  // }
  console.log(user.rightMatches)

  return (
    <>
      {/* <Grid container style={{ marginBottom: '1.5rem' }}> */}
      <Grid item container xs={8} justifyContent='flex-start' style={{ padding: '0 0 0 10px' }}>
        <Grid item>{user.userRanking + '. ' + user.first_name + ' ' + user.last_name}</Grid>
        {/* <Grid item>{`${idx + 1}` + '. ' + user.first_name + ' ' + user.last_name}</Grid> */}
      </Grid>

      <Grid item container xs={2} justifyContent='flex-start' style={{ padding: 0, color: 'gray' }}>
        <Grid>{`${user.rightMatches}/${totalMatches}`}</Grid>
      </Grid>

      <Grid item container xs={2} justifyContent='flex-end' style={{ padding: 0, color: 'gray' }}>
        <Grid style={{ padding: 0 }}>{`${Math.trunc((user.rightMatches / totalMatches) * 100)}%`}</Grid>
      </Grid>
      {/* </Grid> */}
    </>
  )
}

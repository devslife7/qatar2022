import React, { useState } from 'react'
import Grid from '@mui/material/Grid'

export default function PredictionsCard({ user }) {
  const finalResutArray = [
    'F4',
    'E3',
    'B2',
    'H4',
    'F4',
    'D2',
    'C1',
    'E1',
    'C4',
    'D2',
    'F3',
    'E1',
    'H1',
    'G4',
    'C1',
    'G1',
    'C4',
    'A2',
    'C4',
    'A3',
    'A3',
    'B4',
    'A1',
    'A1',
    'B4',
    'H3',
    'B2',
    'E4',
    'C1',
    'C3',
    'G4',
    'E3',
    'D2',
    'C2',
    'F1',
    'G3',
    'A2',
    'G2',
    'D1',
    'G1',
    'F3',
    'D2',
    'C1',
    'H3',
    'F3',
    'A1',
    'D4',
    'F3',
  ]

  const findMatches = (officialResult = [], predictions = []) => {
    let counter = 0
    for (let i = 0; i < officialResult.length; i++) {
      officialResult[i] === predictions[i] && counter++
    }
    console.log(counter)
    return counter
  }

  return (
    <>
      <Grid item container xs={6} justifyContent='flex-start' style={{ padding: '0 0 0 10px' }}>
        <Grid item>{user.first_name + ' ' + user.last_name}</Grid>
      </Grid>
      <Grid item container xs={3} justifyContent='flex-end' style={{ padding: 0 }}>
        <Grid>{`${findMatches(finalResutArray, user.predictionsGS)}/48`}</Grid>
      </Grid>
      <Grid item container xs={3} justifyContent='flex-end' style={{ padding: 0 }}>
        <Grid style={{ padding: 0 }}>
          {Math.trunc((findMatches(finalResutArray, user.predictionsGS) / 48) * 100)}%
        </Grid>
      </Grid>
    </>
  )
}

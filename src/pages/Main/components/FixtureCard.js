import React from 'react'
import Grid from '@mui/material/Grid'
import { fromUnixTime, format } from 'date-fns'

export default function FixtureCard({ fixture }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Grid container justify='center' style={{ margin: '20px 0 20px 0', padding: '0px', fontSize: '18px' }}>
        <Grid item xs={5}>
          <Grid container alignItems='center' justifyContent='flex-end'>
            <span style={{ marginRight: '10px' }}>{fixture.teams.home.name}</span>
            <img src={fixture.teams.home.logo} style={{ width: '30px', height: '20px' }} alt='country flag' />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction='column' alignItems='center'>
            {fixture.fixture.status.short === 'NS' ? (
              <div>{format(fromUnixTime(fixture.fixture.timestamp), 'HH:mm')}</div>
            ) : (
              <>
                <span>
                  {fixture.goals.home} - {fixture.goals.away}
                </span>
                <span style={{ fontSize: '0.7em' }}>{fixture.fixture.status.short}</span>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container alignItems='center'>
            <img src={fixture.teams.away.logo} style={{ width: '30px', height: '20px' }} alt='country flag' />
            <span style={{ marginLeft: '10px' }}>{fixture.teams.away.name}</span>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

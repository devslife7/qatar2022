import React from 'react'
import Grid from '@mui/material/Grid'

export default function FixtureCard({ fixture }) {
  console.log('renders card here')
  return (
    <>
      <Grid container justify='center' style={{ height: '50px', padding: '0px' }}>
        <Grid item xs={5}>
          <Grid container alignItems='center' justifyContent='flex-end'>
            <span style={{ marginRight: '20px' }}>{fixture.teams.home.name}</span>
            <img src={fixture.teams.home.logo} style={{ width: '30px', height: '30px' }} />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction='column' alignItems='center'>
            {fixture.fixture.status.short === 'NS' ? (
              // <div>{format(fromUnixTime(fixture.fixture.timestamp), 'HH:mm')}</div>
              <div>not started</div>
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
          <Grid container alignItems='center' direction='row'>
            <Grid item>
              <img src={fixture.teams.away.logo} style={{ width: '30px', height: '30px' }} />
            </Grid>
            <Grid item>
              <p>{fixture.teams.away.name}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

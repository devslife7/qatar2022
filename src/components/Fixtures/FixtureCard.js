import React from 'react'
import Grid from '@mui/material/Grid'

export default function FixtureCard({ fixture }) {
  return (
    <>
      <Grid container justify='center' style={{ height: '30px', padding: '0px' }}>
        <Grid item xs={5}>
          <Grid container alignItems='center' justify='flex-end'>
            <span>{fixture.teams.home.name}</span>
            <img src={fixture.teams.home.logo} />
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid container direction='column' alignItems='center'>
            {/* {fixture.fixture.status.short === 'NS' ? (
              <div>{format(fromUnixTime(fixture.fixture.timestamp), 'HH:mm')}</div>
            ) : (
              <>
                <span className={classes.fontSize}>
                  {fixture.goals.home} - {fixture.goals.away}
                </span>
                <span style={{ fontSize: '0.7em' }}>{fixture.fixture.status.short}</span>
              </>
            )} */}
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container alignItems='center' direction='row'>
            <Grid item>
              <img src={fixture.teams.away.logo} />
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

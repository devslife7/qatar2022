import React, { useEffect, useState } from 'react'
import '../styles/Fixtures.css'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import FixtureCard from '../assets/FixtureCard'

const serverURL = process.env.REACT_APP_SERVER_URL

export default function Fixtures({ fixtures }) {
  const renderFixtures = () => {
    if (fixtures.length === 0) return
    return fixtures.map((fixture, idx) => (
      <Grid key={idx} item>
        <FixtureCard fixture={fixture} />
        <Divider />
      </Grid>
    ))
  }

  return (
    <div className='fixtures'>
      <div className='container fixtures_container' style={{ padding: '40px 10px 40px 10px' }}>
        <div>{renderFixtures()}</div>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Home from './Home'
import Navbar from '../../components/Navbar/Navbar'
import Fixtures from './Fixtures'
import Predictions from './Predictions'
const serverURL = process.env.REACT_APP_SERVER_URL
const fixturesURL = serverURL + '/fixtures'

export default function MainPage({ fixtures }) {
  const sortedFixtures = fixtures.sort((a, b) => {
    return a.fixture.timestamp - b.fixture.timestamp
  })
  return (
    <>
      <Navbar />
      <Home />
      <Predictions fixtures={sortedFixtures} />
      <Fixtures fixtures={sortedFixtures} />
    </>
  )
}

import React, { useEffect, useState } from 'react'
import Home from '../views/Home'
import Navbar from '../components/Navbar'
import Fixtures from '../views/Fixtures'
import Predictions from '../views/Predictions'
const serverURL = process.env.REACT_APP_SERVER_URL
const fixturesURL = serverURL + '/fixtures'

export default function MainPage({ fixtures }) {
  const sortedFixtures = fixtures.sort((a, b) => a.fixture.timestamp - b.fixture.timestamp)
  return (
    <>
      <Navbar />
      <Home />
      <Predictions fixtures={sortedFixtures} />
      <Fixtures fixtures={sortedFixtures} />
    </>
  )
}

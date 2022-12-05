import React from 'react'
import Home from './Home'
import Navbar from '../../layouts/Navbar/Navbar'
import Fixtures from './Fixtures'
import Predictions from './Predictions'

export default function Main({ fixtures }) {
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

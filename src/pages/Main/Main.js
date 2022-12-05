import React from 'react'
import Home from './Home'
import Navbar from '../../layouts/Navbar/Navbar'
import Fixtures from './Fixtures'
import Predictions from './Predictions'
import { resultsIdCodesKeyReverse } from '../../Data/CountryCodes'
import { testPredictionsArray } from '../../Data/Fixtures'

export default function Main({ fixtures }) {
  // Sort by match start time
  fixtures.sort((a, b) => {
    return a.fixture.timestamp - b.fixture.timestamp
  })

  // Fixing same match issue
  let fixturesSorted = []

  if (fixtures.length > 0) {
    for (let i = 0; i < 48; i++) {
      if (fixtures[i].fixture.timestamp === fixtures[i + 1].fixture.timestamp) {
        if (
          resultsIdCodesKeyReverse[testPredictionsArray[i]] === fixtures[i].teams.home.id ||
          resultsIdCodesKeyReverse[testPredictionsArray[i]] === fixtures[i].teams.away.id
        ) {
          fixturesSorted.push(fixtures[i])
          fixturesSorted.push(fixtures[i + 1])
          i++
        } else {
          fixturesSorted.push(fixtures[i + 1])
          fixturesSorted.push(fixtures[i])
          i++
        }
      } else {
        fixturesSorted.push(fixtures[i])
      }
    }
  }

  return (
    <>
      <Navbar />
      <Home />
      <Predictions fixtures={fixturesSorted} />
      <Fixtures fixtures={fixturesSorted} />
    </>
  )
}

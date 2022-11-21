import React, { useState } from 'react'

const countryCodes = {
  A1: 'Qatar',
  A2: 'Ecuador',
  A3: 'Senegal',
  A4: 'Netherlands',

  B1: 'England',
  B2: 'Iran',
  B3: 'USA',
  B4: 'Wales',

  C1: 'Argentina',
  C2: 'Saudi Arabia',
  C3: 'Mexico',
  C4: 'Poland',

  D1: 'France',
  D2: 'Australia',
  D3: 'Denmark',
  D4: 'Tunisia',

  E1: 'Spain',
  E2: 'Costa Rica',
  E3: 'Germany',
  E4: 'Japan',

  F1: 'Belgium',
  F2: 'Canada',
  F3: 'Morocco',
  F4: 'Croatia',

  G1: 'Brazil',
  G2: 'Serbia',
  G3: 'Switzerland',
  G4: 'Cameroon',

  H1: 'Portugal',
  H2: 'Ghana',
  H3: 'Uruguay',
  H4: 'South Korea',

  TIE: 'TIE',
}

const fixturesArray = [
  ['A1', 'A2'],
  ['B1', 'B2'],
  ['A3', 'A4'],
  ['B3', 'B4'],
  ['C1', 'C2'],
  ['D3', 'D4'],
  ['C3', 'C4'],
  ['D1', 'D2'],
  ['F3', 'F4'],
  ['E3', 'E4'],
  ['E1', 'E2'],
  ['F1', 'F2'],
  ['G3', 'G4'],
  ['H3', 'H4'],
  ['H1', 'H2'],
  ['G1', 'G2'],
  ['B4', 'B2'],
  ['A1', 'A3'],
  ['A4', 'A2'],
  ['B1', 'B3'],
  ['D4', 'D2'],
  ['C4', 'C2'],
  ['D1', 'D3'],
  ['C1', 'C3'],
  ['E4', 'E2'],
  ['F1', 'F3'],
  ['F4', 'F2'],
  ['E1', 'E3'],
  ['G4', 'G2'],
  ['H4', 'H2'],
  ['G1', 'G3'],
  ['H1', 'H3'],
  ['A4', 'A1'],
  ['A2', 'A3'],
  ['B2', 'B3'],
  ['B4', 'B1'],
  ['D4', 'D1'],
  ['D2', 'D3'],
  ['C4', 'C1'],
  ['C2', 'C3'],
  ['F4', 'F1'],
  ['F2', 'F3'],
  ['E4', 'E1'],
  ['E2', 'E3'],
  ['H4', 'H1'],
  ['H2', 'H3'],
  ['G4', 'G1'],
  ['G2', 'G3'],
]

export default function HomePage() {
  const [predictions, setPredictions] = useState([])
  const [counter, setCounter] = useState(0)

  function checkKey(e) {
    var event = window.event ? window.event : e
    let keyDown = event.keyCode

    // arrow codes:
    // left:37
    // down:40
    // up:38
    // right: 39
    // if it is left then output E1 if it is right then output Q1 if it is up/down output TIE

    // left
    if (keyDown === 37) {
      setPredictions([...predictions, fixturesArray[counter][1]])
      // right
    } else if (keyDown === 39) {
      setPredictions([...predictions, fixturesArray[counter][0]])
      // up/down
    } else if (keyDown === 38 || keyDown === 40) {
      setPredictions([...predictions, 'TIE'])
    } else {
      return
    }

    setCounter(counter + 1)
    console.log('Counter: ', counter)
  }

  const convertCodetoCountry = () => {
    let arr = []

    for (let i = 0; i < predictions.length; i++) {
      for (const key in countryCodes) {
        if (predictions[i] == key) {
          arr = [...arr, countryCodes[key]]
        }
      }
    }
    return arr
  }

  const resetTool = () => {
    setPredictions([])
    setCounter(0)
  }

  return (
    <>
      <div style={{ margin: '4rem 0 4rem 0', textAlign: 'center' }}>
        <div style={{ margin: '4rem 0 4rem 0' }}>Predictions calculator tool</div>
        <input onKeyDown={checkKey} />
        <div style={{ margin: '4rem 0 4rem 0' }}>Predictions Array:</div>

        <div style={{ margin: '0 0 12rem 0' }}>{`[${predictions.join(', ')}]`}</div>
        <div style={{ margin: '0 0 12rem 0' }}>{`[${convertCodetoCountry().join(', ')}]`}</div>
        <button onClick={resetTool}>Reset Tool</button>
        <div>Counter: {counter}</div>
      </div>
    </>
  )
}

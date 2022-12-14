import React, { useState } from 'react'
import { countryCodes } from '../../Data/CountryCodes'
import { fixturesArray } from '../../Data/Fixtures'

export default function PredictionInput() {
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
      // console.log(fixturesArray[counter][1])
      // right
    } else if (keyDown === 39) {
      setPredictions([...predictions, fixturesArray[counter][0]])
      // up/down
    } else if (keyDown === 38 || keyDown === 40) {
      setPredictions([...predictions, 'TIE'])
    }

    setCounter(counter + 1)
  }

  const convertCodetoCountry = () => {
    let arr = []

    for (let i = 0; i < predictions.length; i++) {
      for (const key in countryCodes) {
        if (predictions[i] === key) {
          arr = [...arr, countryCodes[key]]
        }
      }
    }
    return arr
  }

  const renderCountriesPredictions = () => {
    const countriesArray = convertCodetoCountry()

    return countriesArray.map((country, idx) => <div key={idx}>{`${idx + 1}. ${country}`}</div>)
  }

  const resetTool = () => {
    setPredictions([])
    setCounter(0)
  }

  return (
    <>
      <div style={{ margin: '2rem 0 2rem 0', textAlign: 'center' }}>
        <div style={{ margin: '2rem 0 2rem 0' }}>Predictions calculator tool</div>
        <input onKeyDown={checkKey} />
        <div style={{ margin: '2rem 0 2rem 0' }}>Predictions Array:</div>

        <div style={{ margin: '0 20rem 2rem 20rem' }}>{`['${predictions.join("', '")}']`}</div>
        <div
          style={{
            margin: '0 0 12rem 0',
            minHeight: '20rem',
            textAlign: 'left',
            paddingLeft: '45vw',
          }}
        >
          {renderCountriesPredictions()}
        </div>
        <button onClick={resetTool}>Reset Tool</button>
        <div>Counter: {counter}</div>
      </div>
    </>
  )
}

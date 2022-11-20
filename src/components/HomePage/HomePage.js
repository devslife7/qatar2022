import React, { useState } from 'react'

export default function HomePage() {
  const [predictions, setPredictions] = useState([])
  const [keyPress, setKeyPress] = useState(23)

  function checkKey(e) {
    var event = window.event ? window.event : e
    let keyDown = event.keyCode

    console.log(keyDown)

    // arrow codes:
    // left:37
    // down:40
    // up:38
    // right: 39
    // if it is left then output E1 if it is right then output Q1 if it is up/down output TIE

    // left
    if (keyDown === 37) {
      setPredictions([...predictions, 'E1'])
      // right
    } else if (keyDown === 39) {
      setPredictions([...predictions, 'Q1'])
      // up/down
    } else if (keyDown === 38 || keyDown === 40) {
      setPredictions([...predictions, 'TIE'])
    }

    // setPredictions([...predictions, keyDown])

    console.log(predictions)
  }

  return (
    <>
      <div style={{ margin: '4rem 0 4rem 0', textAlign: 'center' }}>
        <div style={{ margin: '4rem 0 4rem 0' }}>Predictions calculator tool</div>
        <input onKeyDown={checkKey} />
        <div style={{ margin: '4rem 0 4rem 0' }}>Predictions Array:</div>

        <div style={{ margin: '0 0 12rem 0' }}>{`[${predictions.join(', ')}]`}</div>
      </div>
    </>
  )
}

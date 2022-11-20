import React, { useState } from 'react'

export default function HomePage() {
  const [predictions, setPredictions] = useState('')
  const [keyPress, setKeyPress] = useState(23)

  function checkKey(e) {
    var event = window.event ? window.event : e
    console.log(event.keyCode)
    setPredictions(predictions + `${event.keyCode}, `)
    console.log(predictions)
  }

  return (
    <>
      <div style={{ margin: '4rem 0 4rem 0', textAlign: 'center' }}>
        <div style={{ margin: '4rem 0 4rem 0' }}>Predictions calculator tool</div>
        <input onKeyDown={checkKey} />
        <div style={{ margin: '4rem 0 4rem 0' }}>Predictions Array</div>
        <div>{`[${predictions}]`}</div>
      </div>
    </>
  )
}

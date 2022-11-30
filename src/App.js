import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import MainPage from './views/MainPage'
import PredictionInput from './helpers/PredictionInput'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './views/Profile'
import { apiData } from './helpers/Data'
const serverURL = process.env.REACT_APP_SERVER_URL
const fixturesURL = serverURL + '/fixtures'

// const fixtures = apiData.response

export default function App() {
  const [fixtures, setFixtures] = useState([])

  useEffect(() => {
    console.log('Fetches Fixtures')
    fetch(fixturesURL)
      .then(resp => resp.json())
      .then(fixtures => setFixtures(fixtures))
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage fixtures={fixtures} />} />
        <Route path='/tools' element={<PredictionInput />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  )
}

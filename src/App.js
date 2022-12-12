import React from 'react'
import Footer from './layouts/Footer'
import Main from './pages/Main'
import Profile from './pages/Profile'
import PredictionsOct from './pages/PredictionsOct'
import PredictionInputTool from './pages/PredictionInputTool'
import Users from './pages/Users'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { fixtures } from './Data/Fixtures'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main fixtures={fixtures} />} />
        <Route path='/tools' element={<PredictionInputTool />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/octavos' element={<PredictionsOct fixtures={fixtures} />} />
        <Route path='/users' element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  )
}

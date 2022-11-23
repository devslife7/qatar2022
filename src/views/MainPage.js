import React from 'react'
import Home from '../views/Home'
import Navbar from '../components/Navbar'
import Fixtures from '../views/Fixtures'
import Predictions from '../views/Predictions'

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Predictions />
      <Fixtures />
    </>
  )
}

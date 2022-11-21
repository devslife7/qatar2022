import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Predictions from './components/Predictions'
import Footer from './components/Footer'
import Fixtures from './components/Fixtures'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* <HomePage /> */}
      <Navbar />
      <Home />
      <Predictions />
      <Fixtures />
      <Footer />
    </Router>
  )
}

export default App

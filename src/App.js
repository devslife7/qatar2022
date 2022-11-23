import Home from './components/Home'
import Navbar from './assets/Navbar'
import Predictions from './views/Predictions'
import Footer from './components/Footer'
import Fixtures from './views/Fixtures'
// import PredictionInput from './helpers/PredictionInput'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* <PredictionInput /> */}
      <Navbar />
      <Home />
      <Predictions />
      <Fixtures />
      <Footer />
    </Router>
  )
}

export default App

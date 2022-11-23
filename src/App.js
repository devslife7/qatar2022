import Home from './views/Home'
import Navbar from './components/Navbar'
import Predictions from './views/Predictions'
import Footer from './components/Footer'
import Fixtures from './views/Fixtures'
import MainPage from './views/MainPage'
import PredictionInput from './helpers/PredictionInput'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'

export default function App() {
  // <Route exact path='/' component={Home} />
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/tool' element={<PredictionInput />} />
      </Routes>
      <Footer />
    </Router>
  )
}

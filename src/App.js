import Footer from './components/Footer'
import MainPage from './views/MainPage'
import PredictionInput from './helpers/PredictionInput'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
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

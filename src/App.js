import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Predictions from './components/Predictions'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Predictions />
      <Footer />
    </div>
  )
}

export default App

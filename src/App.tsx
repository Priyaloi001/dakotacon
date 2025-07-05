import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import SpeakerSchedule from './components/SpeakerSchedule'
import Training from './components/Training'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import Speakers from './pages/Speakers'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Schedule  />
              <SpeakerSchedule />
              <Training />
              <Sponsors />
            </>
          }
        />
        {/* Other routes */}
        <Route path="/speakers" element={<Speakers/>} />      
      </Routes>
      <Footer />
    </>
  )
}
export default App

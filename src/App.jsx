import './App.css'
import LandingPage from './Pages/LandingPage'
import MainPage from './Pages/MainPage'
import EventPage from './Pages/EventPage';
import AttractionPage from './Pages/AttractionsPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  AnimatePresence } from 'framer-motion'


function App() {

  const location = useLocation()

  const [getAttractions, setGetAttractions] = useState([])
  const [getEvents, setGetEvents] = useState([])

  useEffect(() => {
    fetch('/src/themepark.json')
      .then(response => response.json())
      .then((data) => setGetAttractions(data.attractions))
      .catch((error) => console.error('You getting this error:', error))
  }, [])

  useEffect(() => {
    fetch('/src/themepark.json')
      .then(response => response.json())
      .then((data) => setGetEvents(data.events))
      .catch((error) => console.error('You getting this error:', error))

  }, [])

  return (
    <div className="App">
        <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route path='/' element={<LandingPage />} />
              <Route path='/main' element={<MainPage />} />
              <Route path='/events' element={<EventPage events={getEvents} />} />
              <Route path='/attractions' element={<AttractionPage attractions={getAttractions} />} />
            </Routes>
        </AnimatePresence>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Stations from './pages/Stations';
import Journeys from './pages/Journeys';
import Navbar from './pages/Navbar';
import { CityBikesJourney, CityBikeStation } from './table/types';

const PAGE_SIZE = 100

const App = () => {
  const [stations, setStations] = useState<CityBikeStation[]>([])
  const [journeys, setJourneys] = useState<CityBikesJourney[]>([])

  const fetchStations = async () => {
    const response = await fetch(`/stations?pageSize=${PAGE_SIZE}`)
    const data = await response.json()

    setStations(data)
  }

  const fetchjourneys = async () => {
    const response = await fetch(`/journeys?pageSize=${PAGE_SIZE}`)
    const data = await response.json()

    setJourneys(data)
  }

  useEffect(() => {
    void fetchStations()
    void fetchjourneys()
  }, [])


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Stations data={stations} />} />
        <Route path='/journeys' element={<Journeys data={journeys} />} />
      </Routes>
    </>
  );
}

export default App;

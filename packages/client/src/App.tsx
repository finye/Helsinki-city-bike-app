import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Stations from './pages/Stations';
import Journeys from './pages/Journeys';
import Navbar from './pages/Navbar';
import { CityBikesJourney, CityBikeStation } from './table/types';

const PAGE_SIZE = 100

const SingleStaionView = () => {
  const [stationDetails, setStationDetails] = useState<CityBikeStation>()
  const { stationId } = useParams()

  useEffect(() => {
    const fetchStationById = async () => {
      const response = await fetch(`/station/${stationId}`)
      const data = await response.json()

      setStationDetails(data)
    }

    void fetchStationById()
  }, [stationId])

  return (
    <div>
      <h1>Station: {stationDetails?.station_id}</h1>

      <p>Longitude: {stationDetails?.x}</p>
      <p>Latitude: {stationDetails?.y}</p>
      <p>Address: {stationDetails?.address}</p>
      <p>Amount of departures from station: {stationDetails?.departure_count}</p>
      <p>Amount of arrivals to station: {stationDetails?.return_count}</p>
    </div>
  )

}

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
        <Route path='/station/:stationId' element={<SingleStaionView />} />
      </Routes>
    </>
  );
}

export default App;

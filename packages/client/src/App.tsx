import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Stations from './pages/Stations';
import Journeys from './pages/Journeys';
import Navbar from './pages/Navbar';
import { CityBikeStation } from './table/types';

export const PAGE_SIZE = 20

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

  const fetchStations = async () => {
    const response = await fetch(`/stations?pageSize=${PAGE_SIZE}`)
    const data = await response.json()

    setStations(data)
  }
  useEffect(() => {
    void fetchStations()
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Stations data={stations} />} />
        <Route path='/journeys' element={<Journeys />} />
        <Route path='/station/:stationId' element={<SingleStaionView />} />
      </Routes>
    </>
  );
}

export default App;

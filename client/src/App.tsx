import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Stations } from './pages/Stations';
import { Journeys } from './pages/Journeys';
import Navbar from './pages/Navbar';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Stations />} />
        <Route path='/Journeys' element={<Journeys />} />
      </Routes>
    </>
  );
}

export default App;

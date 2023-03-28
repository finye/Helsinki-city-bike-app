import React from 'react';
import './App.css';
import Table from './Table/Table';
import { CityBikeStation, ColumnDefinitionType } from './Table/types';
import { Route, Routes } from 'react-router-dom';
import { Stations } from './Pages/Stations';
import { Journeys } from './Pages/Journeys';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Stations />} />
        <Route path='/Journeys' element={<Journeys />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Stations from './pages/Stations';
import Journeys from './pages/Journeys';
import SingleStaionView from './pages/SingleStaionView';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Stations />} />
        <Route path='/journeys' element={<Journeys />} />
        <Route path='/station/:stationId' element={<SingleStaionView />} />
      </Routes>
    </>
  );
}

export default App;

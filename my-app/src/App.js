import React from 'react';
import Navigation from './components/Navigation'
import HomePage from './components/HomePageApp';
import DiningHall from './components/DiningHallApp';
import Restaurant from './components/RestaurantApp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dining' element={<DiningHall />} />
        <Route path='/restaurants' element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;

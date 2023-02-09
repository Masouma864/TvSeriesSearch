import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TvSeriesList from './components/TvSeries/TvSeriesList';
import TvSeries from './components/TvSeries/TvSeries';

import './App.css';

function App() {
  return (
    <div className="App">

      <TvSeriesList />
      <Routes>
        <Route path="/" element={<TvSeriesList />} />
        <Route path="/tvseries/:id/" element={<TvSeries />} />
      </Routes>
    </div>
  );
}

export default App;

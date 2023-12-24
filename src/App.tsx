import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventCard from './components/EventCard';
import NavBar from './components/NavBar';
import EventsPage from './components/EventsPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </div>
  );
}

export default App;

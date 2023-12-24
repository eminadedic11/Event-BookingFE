import React from 'react'
import EventCard from '../EventCard'

const EventsPage = () => {
  const eventData = {
    eventId: '123',
    eventName: 'Fashion Show',
    eventLocation: 'Milano',
    eventDate: '8.11.2024',
    eventTime: '20:00',
  };

  return (
    <div>
      <h1>Events Page</h1>
      <EventCard {...eventData} />
    </div>
  );
};

export default EventsPage;

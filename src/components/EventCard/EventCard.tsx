import React from 'react';

type Props = {
  eventId: string;
  eventName: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
};

const EventCard = (props: Props) => {
  const {
    eventId,
    eventName,
    eventLocation,
    eventDate,
    eventTime,
  } = props;

  return (
    <div className="col-12 col-md-3 m-3">
      <div className="card">
        <div className="card-header">
          EventID: {eventId}
        </div>
        <div className="card-body">
          <h5 className="card-title">{eventName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{eventLocation}</h6>
          <p className="card-text">
            <li className="list-group-item">Location: {eventLocation}</li>
            <li className="list-group-item">Date: {eventDate}</li>
            <li className="list-group-item">Time: {eventTime}</li>
          </p>
          <a className="btn btn-primary">Buy ticket</a>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
import React from 'react';
import RoomsFilter from './RoomsFilter.js';
import RoomsList from './RoomsList';

export default function RoomsContainer() {
  return (
    <div>
      Hello from Rooms Container
      <RoomsFilter />
      <RoomsList />
    </div>
  );
}

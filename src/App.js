import React from 'react';
import Login from './components/Login';
import AddVehicle from './components/AddVehicle';

function App() {
  return (
    <div className="App">
      <h1>Car Parking Lot Smart Inventory Manager</h1>
      <Login />
      <AddVehicle />
    </div>
  );
}

export default App;

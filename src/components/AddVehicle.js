import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebase-config';

const AddVehicle = () => {
  const [vehicle, setVehicle] = useState('');

  const handleAddVehicle = async () => {
    try {
      await addDoc(collection(db, "vehicles"), {
        name: vehicle,
        timestamp: new Date(),
      });
      console.log("Vehicle added");
    } catch (error) {
      console.error("Error adding vehicle: ", error);
    }
  };

  return (
    <div>
      <h2>Add Vehicle</h2>
      <input 
        type="text" 
        placeholder="Enter Vehicle Name" 
        value={vehicle} 
        onChange={(e) => setVehicle(e.target.value)} 
      />
      <button onClick={handleAddVehicle}>Add Vehicle</button>
    </div>
  );
};

export default AddVehicle;
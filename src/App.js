import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase Authentication
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import AddVehicle from './components/AddVehicle';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    
    // Check for user authentication status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);  // Set the user if logged in
      } else {
        setUser(null);  // Set to null if logged out
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <h1>Car Parking Lot Smart Inventory Manager</h1>
      
      {/* shows based on user authentication status */}
      {user ? (
        <div>
          <AddVehicle />  {/* Show vehicle management when logged in */}
          <SignOut />     {/* Sign-out button */}
        </div>
      ) : (
        <div>
          <SignIn />     {/* Show SignIn */}
          <SignUp />     {/* Show SignUp  */}
        </div>
      )}
    </div>
  );
}

export default App;

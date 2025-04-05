import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const SignOut = () => {
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Handle successful sign out
        console.log('User signed out');
      })
      .catch((error) => {
        // Handle sign-out errors
        console.error(error);
      });
  };

  return (
    <button className="signout-btn" onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider, auth } from '../firebase-config';

function GoogleSignIn() {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Redirect to dashboard or wherever after successful login
      window.location.href = '/dashboard';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
}

export default GoogleSignIn;
import React, { useEffect } from 'react';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth, provider } from './firebaseConfig';

export default function LoginGoogle() {

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result.user) {
          console.log('User logged in:', result.user);
        } else {
          console.log('No user authenticated');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  const logarComGoogle = () => {
    signInWithRedirect(auth, provider);
  }

  return (
    <div>
      <button onClick={logarComGoogle}>Logar Com Google</button>
    </div>
  )
}
